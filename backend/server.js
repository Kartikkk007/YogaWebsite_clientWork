const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const scheduleRoutes = require('./routes/scheduleRoutes');
app.use('/api/schedules', scheduleRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Yoga website API running on Vercel Serverless' });
});

// MongoDB connection management for Serverless context
const MONGO_URI = process.env.MONGO_URI;

// Cached connection variable for serverless optimization
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  
  if (!MONGO_URI) {
    console.error("Missing MONGO_URI environment variable");
    return null;
  }

  const db = await mongoose.connect(MONGO_URI);
  cachedDb = db;
  return db;
}

// Middleware to ensure DB connection is alive on every serverless function invocation
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

// EXPORT THE APP FOR VERCEL SERVERLESS
module.exports = app;