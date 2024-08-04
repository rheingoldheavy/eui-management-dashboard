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
  await connectToDatabase();
  try {
    const { euiAddress, properties } = await request.json();
    const newBlock = new Block({ euiAddress, properties });
    await newBlock.save();
    return NextResponse.json(newBlock, { status: 201 });
  } catch (error) {
    console.error('Error creating block:', error);
    return NextResponse.error();
  }
}
