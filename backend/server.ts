import express from 'express';
import cors from 'cors';
import alumniRoutes from './routes/alumniRoutes';
import { connectDB } from './config/db';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/alumni', alumniRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
