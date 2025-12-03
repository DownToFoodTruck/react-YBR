import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(path.join(process.cwd(), '.env')) });
import express  from "express";
const app = express(); //create new express app
const port = process.env.PORT; //using designated port number on front end to access back end
// run server on specific port(5001), and the front end/index on port(3000)

import { MongoClient, ObjectId } from "mongodb"; //create a new mongoDB client
const url = process.env.MONGO_URI;

if (!url) {
  console.error("ERROR: MONGO_URI not found in .env file");
  process.exit(1);
}

console.log("Connecting to MongoDB...");
console.log("Connection string host:", url.split("@")[1]?.split("?")[0] || "unknown");

const client = new MongoClient(url, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  retryWrites: true,
});

// Test connection on startup
client.connect()
  .then(() => {
    console.log("✓ Successfully connected to MongoDB");
    // Keep connection alive
  })
  .catch(err => {
    console.error("✗ Failed to connect to MongoDB:");
    console.error(`  Error: ${err.message}`);
    console.error(`  Code: ${err.code}`);
    console.error("\nTroubleshooting steps:");
    console.error("1. Verify your MONGO_URI in .env is correct");
    console.error("2. Check your MongoDB Atlas network access/IP whitelist");
    console.error("3. Ensure your MongoDB Atlas account is active");
    console.error("4. Try using a direct connection string instead of SRV");
  });

app.use(express.static("dist")); //allows you to pass json data from front end to back end
app.use(express.urlencoded({ extended: true })); //allows you to access req.body

import cors from 'cors';

// cors is a pkg that lets you make request across different urls/different machines -- makes port 3000 talk with server.js port 5001

app.use(cors());

app.use(express.urlencoded({ extended: true })); //allows you to access req.body

{
  /* <!--  Start of sign up --> */
}
app.post("/users", (req, res) => {
  //establish credentials as user obj
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  //function to verify log-in data
  async function insertUser() {
    await client.connect();
    const collection = client.db("test_db").collection("users");
    await collection.insertOne(user);
    await client.close();
  }
  // console.log(user);
  insertUser();
  res.redirect("/");
});

{
  /* <!--  Start of login --> */
// this is some rand comment for testing
}
app.post("/login", (req, res) => {
  let user = {
    email: req.body.email,
    password: req.body.password,
  }; //establish credentials as user obj

  async function verifyUser() {
    await client.connect();
    const collection = client.db("test_db").collection("users");
    let findUser = await collection.findOne(user);
    await client.close();
    // console.log(user);
    if (findUser !== null) {
      res.redirect("/");
    } else {
      res.redirect("/Login");
    }
  }
  // console.log(user);
  verifyUser();
});
{
  /* <!--  End of login --> */
}

{
  /* <!--   Start tag query. Dynamically populates the selection dropdown --> */
}
app.get("/apiTAG", (req, res) => {
  async function getTags() {
    await client.connect();
    const collection = client.db("YBR").collection("PROD5");

    let cursorArray = await collection.distinct("Tags");
    cursorArray = cursorArray.map((i) => i.split(","));
    cursorArray = Array.from(new Set(cursorArray.flat(1)));
    // console.log(cursorArray);
    // cursorArray = Array.from(new Set(cursorArray));
    await client.close();

    if (cursorArray !== null) {
      // console.log(cursorArray);
      res.send(cursorArray);
      // let DUPcursorArray = cursorArray.map((i) => i.split(",").map(i));
    } else {
      console.log("error");
      res.sendStatus(400);
    }
  }

  getTags();
});
{
  /* <!--   End tag query --> */
}

{
  /* <!--   //Query mongo for tag (case insensitive) selected --> */
}

app.get("/api", function (req, res) {
  const tag = req.query.tag;
  async function getSupplies() {
    try {
      await client.connect();
      const collection = client.db("YBR").collection("PROD5");
      const cursorArray = await collection
        .find({
          Tags: {
            $regex: tag,
            $options: "i",
          },
        })
        .sort({
          Name: 1,
        })
        .toArray();
      // console.log(cursorArray);
      res.send(cursorArray);
    } catch (err) {
      res.sendStatus(400);
      console.log(err);
    }
  }
  getSupplies(tag);
});

{
  /* <!--   Geolocation endpoint --> */
}

app.post("/api/geolocation", express.json(), async (req, res) => {
  try {
    const { truck_id, truck_name, latitude, longitude, seenTms } = req.body;

    // Validate required fields
    if (!truck_id || latitude === undefined || longitude === undefined) {
      return res.status(400).json({
        error: "Missing required fields: truck_id, latitude, longitude",
      });
    }

    await client.connect();
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
      
      await client.close();
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

    await client.close();
  } catch (err) {
    console.error("Error posting geolocation:", err);
    res.status(500).json({ 
      error: "Failed to post geolocation", 
      details: err.message 
    });
  }
});

{
  /* <!--   End geolocation endpoint --> */
}

app.get("*", (req, res) => {
    res.sendFile(path.resolve(path.join('dist', 'index.html')));
});

app.listen(port, () =>{
    console.log(`App is listening on http://localhost:${port}`);
});
