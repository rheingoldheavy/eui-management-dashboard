// models/Block.js

/**
 * Mongoose Schema and Model for the IEEE Block Allocation Dashboard
 * 
 * This schema defines the structure and validation rules for the "blocks" collection in the MongoDB database.
 * Each document in the collection represents a block of EUI (Extended Unique Identifier) addresses and associated properties.
 * 
 * Schema Fields:
 * 
 * - deveui (String): A 16-character hexadecimal string representing a 64-bit unsigned integer, uniquely identifying the block.
 *   Example: '8C1F643380000009'
 *   Validation: Must be a 16-character hex string.
 * 
 * - appkey (String): A 128-bit unsigned integer stored as a 32-character hexadecimal string.
 *   Example: '6CA20C8CB015F45604280D3CAD46B090'
 *   Validation: Must be a 32-character hex string.
 * 
 * - deployment (String): Describes the deployment phase or status (e.g., 'SCE', 'CHW').
 *   Validation: Required field.
 * 
 * - property (String): Describes the property or location (e.g., 'Westchester Park', 'Keeler Court').
 *   Validation: Required field.
 * 
 * - building (String): Describes the building (e.g., 'Four', '4', 'North Santa Fe').
 *   Validation: Required field.
 * 
 * - unit (String): Describes the unit within the building (e.g., '3', 'Suite 3', 'Ste 3', 'Garden 4').
 *   Validation: Required field.
 * 
 * - notes (additional notes or comments about the block (e.g., 'Reclaim deveui due to bad display circuit').
 *   Validation: OptionString): Additional field.
 * 
 * - status (Number): Indicates the status of the DEVEUIs assignment
 *   Restricted to predefined values:  0 = unassigned, 1 = assigned, 2 = reclaim
 * 
 * Model:
 * - The model created from this schema is named 'Block' and is used to interact with the "blocks" collection in MongoDB.
 * 
 * Usage:
 * - Import this model in other parts of the application to create, read, update, and delete documents in the "blocks" collection.
 * 
 * Dependencies:
 * - Mongoose: The ODM (Object Data Modeling) library for MongoDB and Node.js.
 */

import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  deveui: { 
    type: String,                                           // Use String to store 64-bit integer as a string
    required: true,                                         // Each record must have a deveui
    unique: true,                                           // Ensure deveui is unique
    trim: true,                                             // Remove leading and trailing spaces
    match: [/^[0-9A-Fa-f]{16}$/, 'Invalid deveui format']   // Validate format for a 16-character hex string
  },
  appkey: { 
    type: String,                                           // Use String to store 128-bit integer as a string
    required: true,                                         // Each record must have an appkey
    trim: true,                                             // Remove leading and trailing spaces
    match: [/^[0-9A-Fa-f]{32}$/, 'Invalid appkey format']   // Validate format for a 128-bit hex string
  },
  deployment: { 
    type: String, 
    required: true, 
    trim: true 
  },
  property: { 
    type: String, 
    required: true, 
    trim: true 
  },
  building: { 
    type: String, 
    required: true, 
    trim: true 
  },
  unit: { 
    type: String, 
    required: true, 
    trim: true 
  },
  status: { 
    type: Number, 
    enum: [0, 1, 2],   // Restrict to predefined values
    required: true, 
  },
  notes: { 
    type: String, 
    trim: true 
  },
});

// Create the model from the schema
const Block = mongoose.models.Block || mongoose.model('Block', BlockSchema);

export default Block;
