// src/lib/mongodb.js

import mongoose from 'mongoose';
import 'dotenv/config'; // Add this line

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable');
}

let cachedClient = global.mongoose;

if (!cachedClient) {
  cachedClient = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cachedClient.conn) {
    return cachedClient.conn;
  }

  if (!cachedClient.promise) {
    // Remove deprecated options
    cachedClient.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  
  cachedClient.conn = await cachedClient.promise;
  return cachedClient.conn;
}

export default connectToDatabase;