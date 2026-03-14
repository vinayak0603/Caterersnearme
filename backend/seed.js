import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Caterer from './src/models/catererModel.js';

dotenv.config();

const caterers = [
  {
    name: "Elite Gourmet",
    location: "Delhi, NCR",
    pricePerPlate: 800,
    cuisines: ["Continental", "Mexican"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8
  },
  {
    name: "Budget Bites",
    location: "Bangalore, Karnataka",
    pricePerPlate: 250,
    cuisines: ["South Indian", "Street Food"],
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
    rating: 4.0
  },
  {
    name: "Oceanic Flavors",
    location: "Goa",
    pricePerPlate: 650,
    cuisines: ["Seafood", "Goan"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    rating: 4.2
  },
  {
    name: "Royal Feast...",
    location: "Pune, Maharashtra",
    pricePerPlate: 600,
    cuisines: ["Continental", "Italian"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5
  },
  {
    name: "Flavors of India",
    location: "Jaipur, Rajasthan",
    pricePerPlate: 550,
    cuisines: ["Mughlai", "North Indian"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop",
    rating: 4.5
  },
  {
    name: "Spice Route",
    location: "Hyderabad, Telangana",
    pricePerPlate: 450,
    cuisines: ["Hyderabadi", "Mughlai"],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2012&auto=format&fit=crop",
    rating: 4.6
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Caterer.deleteMany();
    console.log('Cleared existing caterers.');

    // Insert new data
    await Caterer.insertMany(caterers);
    console.log('Sample caterers seeded successfully!');

    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedData();
