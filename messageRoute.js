import express from "express";
import { MessageModel } from "./Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newMessage = new MessageModel(req.body);
        await newMessage.save();
        res.json({
            message: "Message Received ^_^"
        });
    }
    catch(error) {
        res.json({
            message: "Something went wrong!"
        });
    } 
});

export { router as MessagesRouter }; 