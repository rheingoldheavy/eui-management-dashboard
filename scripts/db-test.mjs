// test-db.js
import connectToDatabase from '../src/lib/db.mjs';

async function testConnection() {
  try {
    const db = await connectToDatabase();
    console.log('Database connected successfully!');
    // Perform some test operations
    // Example: Check if the connection object is valid
    if (db) {
      console.log('Mongoose connection:', db.connection.readyState);
      // 1 = connected, 2 = connecting, 3 = disconnecting, 4 = disconnected
    } else {
      console.log('No connection object returned.');
    }
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

testConnection();
