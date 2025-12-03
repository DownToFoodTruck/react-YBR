import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(path.join(process.cwd(), '.env')) });
import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI;

console.log("Testing MongoDB Connection...");
console.log("=" * 60);

if (!mongoUri) {
  console.error("ERROR: MONGO_URI not set in .env file");
  process.exit(1);
}

// Parse the connection string
try {
  const urlObj = new URL(mongoUri);
  console.log("✓ Connection string format is valid");
  console.log(`  Protocol: ${urlObj.protocol}`);
  console.log(`  Username: ${urlObj.username}`);
  console.log(`  Host: ${urlObj.hostname}`);
  console.log(`  Database: ${urlObj.pathname}`);
} catch (err) {
  console.error("✗ Invalid connection string format:", err.message);
  process.exit(1);
}

// Test connection
const client = new MongoClient(mongoUri, {
  serverSelectionTimeoutMS: 15000,
  connectTimeoutMS: 15000,
});

async function testConnection() {
  try {
    console.log("\nAttempting to connect...");
    await client.connect();
    console.log("✓ Successfully connected to MongoDB!");
    
    // Test database access
    const admin = client.db('admin');
    const result = await admin.command({ ping: 1 });
    console.log("✓ Ping successful:", result);
    
    // List databases
    const databases = await admin.listDatabases();
    console.log("\n✓ Available databases:");
    databases.databases.forEach(db => {
      console.log(`  - ${db.name}`);
    });
    
    process.exit(0);
  } catch (err) {
    console.error("\n✗ Connection failed!");
    console.error(`  Error: ${err.message}`);
    console.error(`  Code: ${err.code}`);
    
    if (err.code === 'ENOTFOUND') {
      console.error("\n  This typically means:");
      console.error("  1. DNS SRV lookup failed (network/firewall issue)");
      console.error("  2. Your cluster name in the connection string is wrong");
      console.error("  3. MongoDB Atlas is experiencing issues");
    }
    
    process.exit(1);
  } finally {
    await client.close();
  }
}

testConnection();
