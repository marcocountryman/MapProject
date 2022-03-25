import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pinsRoutes from './routes/pins.js';
import usersRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(express.json());


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error))

app.use('/api/pins', pinsRoutes);
app.use('/api/users', usersRoutes);

app.listen(4000, () => {
    console.log("Server running...")
});