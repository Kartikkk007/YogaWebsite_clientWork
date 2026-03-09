const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// GET all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find({ isActive: true }).sort({
      day: 1,
    });
    res.json({ success: true, data: schedules });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET schedule by day
router.get('/:day', async (req, res) => {
  try {
    const schedule = await Schedule.findOne({ day: req.params.day });
    if (!schedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }
    res.json({ success: true, data: schedule });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create or replace a day's schedule
router.post('/', async (req, res) => {
  try {
    const { day, classes } = req.body;

    if (!day || !classes) {
      return res.status(400).json({ success: false, message: 'day and classes are required' });
    }

    // Upsert: create if not exists, replace if exists
    const schedule = await Schedule.findOneAndUpdate(
      { day },
      { day, classes, isActive: true },
      { new: true, upsert: true, runValidators: true }
    );

    // Broadcast real-time update to all connected clients
    const io = req.app.get('io');
    const allSchedules = await Schedule.find({ isActive: true });
    io.emit('scheduleUpdated', allSchedules);

    res.status(201).json({ success: true, data: schedule });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update a specific class within a day
router.put('/:day/class/:classId', async (req, res) => {
  try {
    const { day, classId } = req.params;
    const updates = req.body;

    const schedule = await Schedule.findOne({ day });
    if (!schedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }

    const classItem = schedule.classes.id(classId);
    if (!classItem) {
      return res.status(404).json({ success: false, message: 'Class not found' });
    }

    Object.assign(classItem, updates);
    await schedule.save();

    const io = req.app.get('io');
    const allSchedules = await Schedule.find({ isActive: true });
    io.emit('scheduleUpdated', allSchedules);

    res.json({ success: true, data: schedule });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE a class from a day
router.delete('/:day/class/:classId', async (req, res) => {
  try {
    const { day, classId } = req.params;

    const schedule = await Schedule.findOne({ day });
    if (!schedule) {
      return res.status(404).json({ success: false, message: 'Schedule not found' });
    }

    schedule.classes = schedule.classes.filter(
      (c) => c._id.toString() !== classId
    );
    await schedule.save();

    const io = req.app.get('io');
    const allSchedules = await Schedule.find({ isActive: true });
    io.emit('scheduleUpdated', allSchedules);

    res.json({ success: true, data: schedule });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE entire day schedule
router.delete('/:day', async (req, res) => {
  try {
    await Schedule.findOneAndDelete({ day: req.params.day });

    const io = req.app.get('io');
    const allSchedules = await Schedule.find({ isActive: true });
    io.emit('scheduleUpdated', allSchedules);

    res.json({ success: true, message: `${req.params.day} schedule deleted` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST seed default schedule (useful for first-time setup)
router.post('/seed/default', async (req, res) => {
  try {
    const defaultSchedule = [
      {
        day: 'Monday',
        classes: [
          { time: '6:00 AM', name: 'Morning Flow', duration: '60 min', level: 'All Levels', spots: 15, description: 'Start your week with gentle energising flow' },
          { time: '7:00 PM', name: 'Restorative Yoga', duration: '75 min', level: 'Beginner', spots: 12, description: 'Wind down with deep stretches and relaxation' },
        ],
      },
      {
        day: 'Tuesday',
        classes: [
          { time: '7:00 AM', name: 'Vinyasa Flow', duration: '60 min', level: 'Intermediate', spots: 15, description: 'Dynamic sequences synced with breath' },
          { time: '6:00 PM', name: 'Hatha Basics', duration: '60 min', level: 'Beginner', spots: 20, description: 'Classic postures with alignment focus' },
        ],
      },
      {
        day: 'Wednesday',
        classes: [
          { time: '6:00 AM', name: 'Power Yoga', duration: '60 min', level: 'Advanced', spots: 10, description: 'Challenging sequences to build strength' },
          { time: '7:30 PM', name: 'Yin Yoga', duration: '75 min', level: 'All Levels', spots: 15, description: 'Deep connective tissue release' },
        ],
      },
      {
        day: 'Thursday',
        classes: [
          { time: '7:00 AM', name: 'Pranayama & Meditation', duration: '45 min', level: 'All Levels', spots: 20, description: 'Breathwork and mindfulness practice' },
          { time: '6:00 PM', name: 'Ashtanga Primary', duration: '90 min', level: 'Intermediate', spots: 10, description: 'Traditional Ashtanga series' },
        ],
      },
      {
        day: 'Friday',
        classes: [
          { time: '6:00 AM', name: 'Sunrise Vinyasa', duration: '60 min', level: 'All Levels', spots: 15, description: 'Energising flow to close the week' },
          { time: '6:30 PM', name: 'Deep Stretch & Release', duration: '75 min', level: 'Beginner', spots: 18, description: 'Prepare your body for the weekend' },
        ],
      },
      {
        day: 'Saturday',
        classes: [
          { time: '8:00 AM', name: 'Weekend Warrior', duration: '90 min', level: 'Intermediate', spots: 12, description: 'Invigorating full-body practice' },
          { time: '10:00 AM', name: 'Family Yoga', duration: '60 min', level: 'All Levels', spots: 20, description: 'Fun, gentle yoga for all ages' },
        ],
      },
      {
        day: 'Sunday',
        classes: [
          { time: '9:00 AM', name: 'Slow Flow Sunday', duration: '75 min', level: 'All Levels', spots: 18, description: 'Gentle movement to restore and renew' },
          { time: '5:00 PM', name: 'Meditation & Nidra', duration: '60 min', level: 'All Levels', spots: 20, description: 'Yoga Nidra for deep rest and healing' },
        ],
      },
    ];

    await Schedule.deleteMany({});
    const created = await Schedule.insertMany(defaultSchedule);

    const io = req.app.get('io');
    io.emit('scheduleUpdated', created);

    res.status(201).json({ success: true, message: 'Default schedule seeded', data: created });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
