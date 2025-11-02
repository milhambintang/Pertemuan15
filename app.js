import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});