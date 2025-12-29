import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI;

if (!url) {
  throw new Error("MONGO_URI not found in environment variables");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(url, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      retryWrites: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(url, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
    retryWrites: true,
  });
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { tag } = req.query;

  if (!tag) {
    return res.status(400).json({ error: "Missing tag query parameter" });
  }

  try {
    const client = await clientPromise;
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

    res.status(200).json(cursorArray);
  } catch (error) {
    console.error("Error fetching supplies:", error);
    res.status(500).json({ error: "Failed to fetch supplies" });
  }
}