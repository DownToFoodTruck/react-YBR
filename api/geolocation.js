import { ObjectId } from "mongodb";
import { mongo } from "./lib/mongodb.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { truck_id, truck_name, latitude, longitude, seenTms } = req.body;

    // Validate required fields
    if (!truck_id || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        error: "Missing required fields: truck_id, latitude, longitude",
      });
    }

    const client = await mongo;
    const db = client.db("YBR");
    const collection = db.collection("PROD5");

    // Create geolocation entry
    const geolocationEntry = {
      seenTms: seenTms || new Date().toISOString(),
      lat: parseFloat(latitude),
      long: parseFloat(longitude),
    };

    // Try multiple query approaches
    let result = null;
    let query = null;

    // First try: Direct string match
    query = { _id: truck_id };
    result = await collection.updateOne(
      query,
      {
        $push: {
          geolocationHistory: geolocationEntry,
        },
        $set: {
          lastSeenTms: geolocationEntry.seenTms,
          lastLat: geolocationEntry.lat,
          lastLong: geolocationEntry.long,
        },
      }
    );

    // Second try: If not found, try ObjectId conversion
    if (result.matchedCount === 0) {
      try {
        query = { _id: new ObjectId(truck_id) };
        result = await collection.updateOne(
          query,
          {
            $push: {
              geolocationHistory: geolocationEntry,
            },
            $set: {
              lastSeenTms: geolocationEntry.seenTms,
              lastLat: geolocationEntry.lat,
              lastLong: geolocationEntry.long,
            },
          }
        );
      } catch (err) {
        // Invalid ObjectId format, continue
        console.log("Invalid ObjectId format:", truck_id);
      }
    }

    if (result.matchedCount === 0) {
      console.error("Truck not found with ID:", truck_id);
      console.error("Query attempted:", query);

      // Log what trucks exist for debugging
      const sampleTruck = await collection.findOne({});
      if (sampleTruck) {
        console.log("Sample truck _id:", sampleTruck._id, "Type:", typeof sampleTruck._id);
      }

      return res.status(404).json({
        error: "Truck not found",
        attempted_id: truck_id
      });
    }

    res.json({
      success: true,
      message: `Location posted for ${truck_name}`,
      geolocation: geolocationEntry,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    console.error("Error posting geolocation:", err);
    res.status(500).json({
      error: "Failed to post geolocation",
      details: err.message
    });
  }
}