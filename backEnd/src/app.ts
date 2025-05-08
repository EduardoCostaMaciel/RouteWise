import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/test", (_, res: Response) => res.send("Setup rodando !"));

export default app;
