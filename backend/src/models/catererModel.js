import mongoose from 'mongoose';

/**
 * Caterer Schema
 * Defines the structure of the caterer document in the MongoDB collection.
 */
const catererSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a caterer name'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    pricePerPlate: {
      type: Number,
      required: [true, 'Please add the price per plate'],
    },
    cuisines: {
      type: [String],
      required: [true, 'Please add at least one cuisine'],
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop', // Default catering image
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot be more than 5'],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Format the returned object to change _id to id and remove __v
catererSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Caterer = mongoose.model('Caterer', catererSchema);

export default Caterer;
