import { Router } from "express";
import authService from "../service/authService.js";

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await authService.login(email, password);
  if (response == null) {
    res.status(401).json({ message: "Email ou senha inválidos." });
    return;
  }
  res.status(200).json({ token: response.token, user: response.user });
});

export default authRouter;
