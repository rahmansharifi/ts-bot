import { type Update } from "grammy/types";

import express, { Request, Response } from "express";
import dotenv from "dotenv";
import axios, { AxiosInstance } from "axios";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const xhr: AxiosInstance = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`,
});

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send({ status: 200 });
  return;
});

app.post("/", async (req: Request, res: Response) => {
  const update: Update = req.body;
  const { message } = update;
  if (message) {
    await xhr.post("/sendMessage", {
      chat_id: message.chat.id,
      text: message.from.first_name,
    });
  }
  res.end();
  return;
});

app.listen(port, (): void => {
  return console.log(`Server is listening on ${port}`);
});
