import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req: Request, res: Response) => {
  res.send("Express Typescript on Vercel");
  return; // Returns void
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong 🏓");
});

app.listen(port, (): void => {
  return console.log(`Server is listening on ${port}`);
});
