import express from 'express';
import cors from 'cors';
import catererRoutes from './routes/catererRoutes.js';

const app = express();

// Updated CORS middleware to explicitly allow frontend origins
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173", "https://caterersnearme-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// Define Routes
app.use('/api/caterers', catererRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling for undefined routes
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

export default app;
