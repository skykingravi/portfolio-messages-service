import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

export const MessageModel = new mongoose.model("messages", MessageSchema);