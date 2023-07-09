import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MessagesRouter } from "./messageRoute.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors({
    origin: '*'
}));
app.use("/message", MessagesRouter);

const PORT = process.env.PORT;
const URL = process.env.URL;

mongoose.connect(URL).then(() => console.log("DB Connected !")).catch((err) => console.error(err));


app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT - ${PORT}`);
});