import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);

app.use(authMiddleware);
app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
