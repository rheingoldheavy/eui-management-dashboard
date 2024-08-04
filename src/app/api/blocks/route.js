// app/api/blocks/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Block from '../../../models/Block';

export async function GET() {
  await connectDB();
  try {
    const blocks = await Block.find();
    return NextResponse.json(blocks);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request) {
  await connectDB();
  try {
    const { euiAddress, properties } = await request.json();
    const newBlock = new Block({ euiAddress, properties });
    await newBlock.save();
    return NextResponse.json(newBlock, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}
