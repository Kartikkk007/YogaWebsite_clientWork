const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  time: { type: String, required: true },       // e.g. "7:00 AM"
  name: { type: String, required: true },        // e.g. "Hatha Flow"
  instructor: { type: String, default: 'Mansi Sharma' },
  duration: { type: String, required: true },   // e.g. "60 min"
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    default: 'All Levels',
  },
  spots: { type: Number, default: 15 },
  description: { type: String, default: '' },
});

const scheduleSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      unique: true,
    },
    classes: [classSchema],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Schedule', scheduleSchema);
