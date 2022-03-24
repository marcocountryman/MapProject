import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import pinsRoutes from './routes/pins.js';

const app = express();
dotenv.config();

app.use(express.json());


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error))

// app.use('/pins', pinsRoutes);

app.listen(4000, () => {
    console.log("Server running...")
});