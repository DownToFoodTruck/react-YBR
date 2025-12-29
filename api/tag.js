import { mongo } from "./lib/mongodb.js";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await mongo;
    const collection = client.db("YBR").collection("PROD5");

    let cursorArray = await collection.distinct("Tags");
    cursorArray = cursorArray.map((i) => i.split(","));
    cursorArray = Array.from(new Set(cursorArray.flat(1)));

    res.status(200).json(cursorArray);
  } catch (error) {
    console.error("Error fetching tags:", error);
    res.status(500).json({ error: "Failed to fetch tags" });
  }
}