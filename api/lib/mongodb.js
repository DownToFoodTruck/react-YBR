import { MongoClient } from "mongodb";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI not found in environment variables");
}

const options = {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  retryWrites: true,
};

// Use global cache in dev to survive HMR, otherwise create new
export const mongo = global._mongo ??=
  new MongoClient(process.env.MONGO_URI, options).connect();
