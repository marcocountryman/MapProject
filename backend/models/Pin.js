import mongoose from 'mongoose';

const { Schema } = mongoose;
const PinSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    title: {
        type: String,
        requre: true,
        min: 3
    },
    desc: {
        type: String,
        require: true,
        min: 3
    },
    rating: {
        type: Number,
        requre: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Number,
        require: true
    },
    long: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const Pin = mongoose.model("Pin", PinSchema);
export default Pin;