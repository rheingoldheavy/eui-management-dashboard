import mongoose from 'mongoose';
import Block from '../src/models/Block.js'; // Adjust the path to where Block.js is located

const sampleBlocks = [
  {
    deveui: '8C1F643380000009',
    appkey: '6CA20C8CB015F45604280D3CAD46B090',
    deployment: 'SCE',
    property: 'Westchester Park',
    building: 'Four',
    unit: '3',
    notes: 'Reclaim deveui due to bad display circuit'
  },
  {
    deveui: '9D2F743480000010',
    appkey: '7DA30D9DB116F56715390E4DBB57C1A1',
    deployment: 'CHW',
    property: 'Keeler Court',
    building: '4',
    unit: 'Suite 3',
    notes: 'Install new sensor'
  }
];

async function initializeDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/eui-block', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    await Block.deleteMany({}); // Clear existing data
    const result = await Block.insertMany(sampleBlocks);

    console.log('Sample data inserted:', result);

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    mongoose.connection.close();
  }
}

initializeDatabase();
