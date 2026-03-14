import express from 'express';
import { body } from 'express-validator';
import { createCaterer, getCaterers, getCatererById } from '../controllers/catererController.js';

const router = express.Router();

/**
 * Validation rules for POST /api/caterers
 */
const createCatererValidation = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('location').notEmpty().withMessage('Location is required').trim(),
  body('pricePerPlate').isNumeric().withMessage('Price per plate must be a number').notEmpty().withMessage('Price per plate is required'),
  body('cuisines').isArray({ min: 1 }).withMessage('Cuisines must be an array with at least one item'),
  body('rating').optional().isNumeric().withMessage('Rating must be a number').custom((value) => {
      if (value < 0 || value > 5) {
          throw new Error('Rating must be between 0 and 5');
      }
      return true;
  })
];

// Route definitions
router.route('/').get(getCaterers).post(createCatererValidation, createCaterer);
router.route('/:id').get(getCatererById);

export default router;
