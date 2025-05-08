import { Router } from "express";
import userService from "../service/userService.js";
import { emailExistsMiddleware } from "../middleware/emailExistsMiddleware.js";
import { v4 as uuidv4 } from 'uuid';

const userRouter = Router();

userRouter.get("/users", async (req, res) => {
  res.json(await userService.getUsers());
});

userRouter.post("/users", emailExistsMiddleware, async (req, res) => {
  const { name, email, type, password } = req.body;
  const newUser = { id: uuidv4(), name, email, type, password };
  res.status(201).json(await userService.createUser(newUser));
});

userRouter.put("/users/:id", emailExistsMiddleware, async (req, res) => {
  const { id } = req.params;
  const { name, email, type, password } = req.body;
  const newData = { id, name, email, type, password };

  await userService.updateUser(newData);
  res.status(200).send();
});

userRouter.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(200).send();
});

export default userRouter;
