// scripts/update-status.js
import mongoose from 'mongoose';
import connectDB from '../src//lib/db.js';
import Block from '../src/models/Block.js'; // Adjust the path to where Block.js is located

const updateStatus = async () => {
  try {
    await connectDB();
    const result = await Block.updateMany(
      {},
      { $set: { status: 1 } } // Default status for existing records
    );
    console.log('Update Result:', result);
  } catch (error) {
    console.error('Error updating status:', error);
  } finally {
    mongoose.connection.close();
  }
};

updateStatus();
