import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.listen(4000, () => {
    console.log("Server running...")
})