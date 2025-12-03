import csv
import json
from update_geolocation import batch_update_geolocation, get_record_by_id
from datetime import datetime

def load_geolocation_data_from_csv(filename):
    """
    Load geolocation data from CSV file
    Expected columns: unique_id, latitude, longitude
    
    Args:
        filename (str): Path to CSV file
    
    Returns:
        list: List of update dictionaries
    """
    updates = []
    
    try:
        with open(filename, 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                try:
                    update = {
                        "unique_id": row.get('unique_id') or row.get('_id'),
                        "latitude": float(row.get('latitude')),
                        "longitude": float(row.get('longitude'))
                    }
                    updates.append(update)
                except ValueError as e:
                    print(f"Skipping row with invalid coordinates: {row}")
                    
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found")
        return []
    
    return updates

def load_geolocation_data_from_json(filename):
    """
    Load geolocation data from JSON file
    Expected format: [{"unique_id": "...", "latitude": ..., "longitude": ...}, ...]
    
    Args:
        filename (str): Path to JSON file
    
    Returns:
        list: List of update dictionaries
    """
    try:
        with open(filename, 'r') as jsonfile:
            data = json.load(jsonfile)
            
        if isinstance(data, list):
            return data
        else:
            print("Error: JSON file should contain a list of update objects")
            return []
            
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found")
        return []
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON in file '{filename}'")
        return []

def export_records_with_geolocation(output_file):
    """
    Export all records with their geolocation history to a file
    
    Args:
        output_file (str): Path to output JSON file
    """
    from update_geolocation import connect_to_mongodb
    
    try:
        db = connect_to_mongodb()
        collection = db.PROD4
        
        # Get all records
        records = list(collection.find({}))
        
        # Convert ObjectId to string for JSON serialization
        for record in records:
            record['_id'] = str(record['_id'])
        
        # Save to file
        with open(output_file, 'w') as f:
            json.dump(records, f, indent=2, default=str)
        
        print(f"✓ Exported {len(records)} records to {output_file}")
        return records
        
    except Exception as e:
        print(f"✗ Error exporting records: {str(e)}")
        return []

def view_record_geolocation_history(unique_id):
    """
    Display the geolocation history for a specific record
    
    Args:
        unique_id (str): The MongoDB ObjectId or unique identifier
    """
    record = get_record_by_id(unique_id)
    
    if not record:
        print(f"Record not found: {unique_id}")
        return
    
    print(f"\n{'='*60}")
    print(f"Record: {record.get('Name', 'Unknown')}")
    print(f"ID: {record.get('_id')}")
    print(f"{'='*60}")
    
    # Current location
    if 'lastLat' in record and 'lastLong' in record:
        print(f"\nCurrent Location:")
        print(f"  Latitude: {record['lastLat']}")
        print(f"  Longitude: {record['lastLong']}")
        print(f"  Last Seen: {record.get('lastSeenTms', 'N/A')}")
    
    # Geolocation history
    if 'geolocationHistory' in record:
        history = record['geolocationHistory']
        print(f"\nGeolocation History ({len(history)} entries):")
        print("-" * 60)
        
        for i, entry in enumerate(history, 1):
            print(f"{i}. Timestamp: {entry.get('seenTms')}")
            print(f"   Lat: {entry.get('lat')}, Long: {entry.get('long')}")
    else:
        print("\nNo geolocation history available")
    
    print(f"{'='*60}\n")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python process_geolocation_data.py --csv <filename>     # Load from CSV")
        print("  python process_geolocation_data.py --json <filename>    # Load from JSON")
        print("  python process_geolocation_data.py --export <filename>  # Export all records")
        print("  python process_geolocation_data.py --view <unique_id>   # View record history")
    else:
        command = sys.argv[1]
        
        if command == "--csv" and len(sys.argv) > 2:
            filename = sys.argv[2]
            updates = load_geolocation_data_from_csv(filename)
            if updates:
                batch_update_geolocation(updates)
        
        elif command == "--json" and len(sys.argv) > 2:
            filename = sys.argv[2]
            updates = load_geolocation_data_from_json(filename)
            if updates:
                batch_update_geolocation(updates)
        
        elif command == "--export" and len(sys.argv) > 2:
            output_file = sys.argv[2]
            export_records_with_geolocation(output_file)
        
        elif command == "--view" and len(sys.argv) > 2:
            unique_id = sys.argv[2]
            view_record_geolocation_history(unique_id)
        
        else:
            print("Invalid command or missing arguments")
