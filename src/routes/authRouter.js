import { Router } from "express";
import authService from "../service/authService.js";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  const token = authService.login(email, password);
  if (!token) {
    res.status(401).json({ message: "Email ou senha inválidos." });
  }
  res.status(200).json({ token });
});

export default authRouter;
