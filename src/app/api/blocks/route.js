// app/api/blocks/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/db.mjs';
import Block from '../../../models/Block';

export async function GET() {
  await connectToDatabase();
  try {
    const blocks = await Block.find().exec();
    return NextResponse.json(blocks);
  } catch (error) {
    console.error('Error fetching blocks:', error);
    return NextResponse.error();
  }
}

export async function POST(request) {

  try {
      const requestData = await request.json();
      console.log("Request data received:", requestData);
  
      const { deveui, appkey, deployment, property, building, unit, notes, status } = requestData;
  
      await connectToDatabase();
      const newBlock = new Block({ deveui, appkey, deployment, property, building, unit, notes, status });
  
      await newBlock.save();
      return NextResponse.json(newBlock, { status: 201 });
    } catch (error) {
      console.error('Error creating block:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
        code: error.code || 'No error code'
      });
  
      // Returning more detailed error response to the client (consider security implications)
      return NextResponse.json({
        message: "Error creating block",
        error: error.message,
        fields: error.errors // If using Mongoose, it might have error.errors detailing field-specific issues
      }, { status: 500 });
    }
  }