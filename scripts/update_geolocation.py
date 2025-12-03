from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId

# Load environment variables from .env file
load_dotenv()

def connect_to_mongodb():
    """Connect to MongoDB using credentials from environment variables"""
    mongo_uri = os.getenv('MONGODB_URI')
    
    if not mongo_uri:
        raise ValueError("MongoDB URI not found in environment variables")
    
    client = MongoClient(mongo_uri)
    db = client.YBR
    return db

def update_geolocation(unique_id, latitude, longitude):
    """
    Update a record with new geolocation information
    
    Args:
        unique_id (str): The MongoDB ObjectId or unique identifier of the record
        latitude (float): Latitude coordinate
        longitude (float): Longitude coordinate
    
    Returns:
        bool: True if update was successful, False otherwise
    """
    try:
        db = connect_to_mongodb()
        collection = db.PROD4
        
        # Create geolocation entry with timestamp
        geolocation_entry = {
            "seenTms": datetime.now().isoformat(),
            "lat": latitude,
            "long": longitude
        }
        
        # Try to convert unique_id to ObjectId if it's a valid MongoDB ObjectId
        try:
            query_id = ObjectId(unique_id)
        except:
            # If not a valid ObjectId, use the string directly
            query_id = unique_id
        
        # Update the record by appending geolocation to an array field
        result = collection.find_one_and_update(
            {"_id": query_id},
            {
                "$push": {
                    "geolocationHistory": geolocation_entry
                },
                "$set": {
                    "lastSeenTms": datetime.now().isoformat(),
                    "lastLat": latitude,
                    "lastLong": longitude
                }
            },
            return_document=True
        )
        
        if result:
            print(f"✓ Successfully updated record {unique_id}")
            print(f"  Geolocation: ({latitude}, {longitude})")
            print(f"  Timestamp: {geolocation_entry['seenTms']}")
            return True
        else:
            print(f"✗ Record not found: {unique_id}")
            return False
            
    except Exception as e:
        print(f"✗ Error updating record: {str(e)}")
        return False

def batch_update_geolocation(updates_list):
    """
    Update multiple records with geolocation information
    
    Args:
        updates_list (list): List of dicts with keys: unique_id, latitude, longitude
    
    Returns:
        dict: Summary of updates (successful, failed)
    """
    successful = 0
    failed = 0
    
    print(f"\nProcessing {len(updates_list)} updates...")
    print("-" * 60)
    
    for update in updates_list:
        unique_id = update.get('unique_id')
        latitude = update.get('latitude')
        longitude = update.get('longitude')
        
        if unique_id and latitude is not None and longitude is not None:
            if update_geolocation(unique_id, latitude, longitude):
                successful += 1
            else:
                failed += 1
        else:
            print(f"✗ Skipping invalid update: missing required fields")
            failed += 1
    
    print("-" * 60)
    print(f"\nUpdate Summary:")
    print(f"  Successful: {successful}")
    print(f"  Failed: {failed}")
    print(f"  Total: {len(updates_list)}")
    
    return {"successful": successful, "failed": failed}

def get_record_by_id(unique_id):
    """
    Retrieve a record by its unique ID to see geolocation history
    
    Args:
        unique_id (str): The MongoDB ObjectId or unique identifier
    
    Returns:
        dict: The record data or None if not found
    """
    try:
        db = connect_to_mongodb()
        collection = db.PROD4
        
        # Try to convert unique_id to ObjectId if it's a valid MongoDB ObjectId
        try:
            query_id = ObjectId(unique_id)
        except:
            query_id = unique_id
        
        record = collection.find_one({"_id": query_id})
        return record
        
    except Exception as e:
        print(f"Error retrieving record: {str(e)}")
        return None

if __name__ == "__main__":
    # Example usage:
    # Single update
    # update_geolocation("507f1f77bcf86cd799439011", 40.7128, -74.0060)
    
    # Batch update example
    updates = [
        {
            "unique_id": "507f1f77bcf86cd799439011",
            "latitude": 40.7128,
            "longitude": -74.0060
        },
        {
            "unique_id": "507f1f77bcf86cd799439012",
            "latitude": 34.0522,
            "longitude": -118.2437
        }
    ]
    
    # Uncomment to run:
    # batch_update_geolocation(updates)
    
    print("Geolocation Update Module Ready")
    print("\nUsage:")
    print("  from update_geolocation import update_geolocation, batch_update_geolocation, get_record_by_id")
    print("\n  # Single update:")
    print("  update_geolocation('record_id', latitude, longitude)")
    print("\n  # Batch update:")
    print("  batch_update_geolocation([{...}, {...}])")
    print("\n  # Get record:")
    print("  get_record_by_id('record_id')")
