import { validationResult } from 'express-validator';
import Caterer from '../models/catererModel.js';

/**
 * @desc    Create a new caterer
 * @route   POST /api/caterers
 * @access  Public
 */
export const createCaterer = async (req, res) => {
  // Check for validation errors from express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, location, pricePerPlate, cuisines, rating } = req.body;

    // Create a new caterer instance
    const caterer = new Caterer({
      name,
      location,
      pricePerPlate,
      cuisines,
      rating,
    });

    // Save to the database
    const createdCaterer = await caterer.save();
    
    // Respond with the created caterer
    res.status(201).json(createdCaterer);
  } catch (error) {
    console.error('Error creating caterer:', error.message);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

/**
 * @desc    Get all caterers
 * @route   GET /api/caterers
 * @access  Public
 */
export const getCaterers = async (req, res) => {
  try {
    // Optionally handle query params for searching/filtering if needed directly in backend (optional based on requirements)
    const filter = {};
    if (req.query.name) {
       filter.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive search
    }
    if (req.query.maxPrice) {
       filter.pricePerPlate = { $lte: Number(req.query.maxPrice) };
    }

    const caterers = await Caterer.find(filter).sort({ createdAt: -1 });
    res.json(caterers);
  } catch (error) {
    console.error('Error fetching caterers:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @desc    Get a single caterer by ID
 * @route   GET /api/caterers/:id
 * @access  Public
 */
export const getCatererById = async (req, res) => {
  try {
    const caterer = await Caterer.findById(req.params.id);

    if (caterer) {
      res.json(caterer);
    } else {
      res.status(404).json({ message: 'Caterer not found' });
    }
  } catch (error) {
    // Check if error is due to an invalid Object ID
    if (error.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Caterer not found' });
    }
    console.error('Error fetching caterer by ID:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
