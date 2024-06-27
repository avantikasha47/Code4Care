const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Get all doctors
router.get('/doctors', async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

// Get doctors by disease
router.get('/doctors/:disease', async (req, res) => {
    const { disease } = req.params;
    const doctors = await Doctor.find({ specialty: disease });
    res.json(doctors);
});

module.exports = router;
