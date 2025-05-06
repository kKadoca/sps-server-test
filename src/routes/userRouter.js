import { Router } from "express";
import userService from "./service/userService.js";
import { emailExistsMiddleware } from "../middleware/emailExistsMiddleware.js";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.json(userService.getUsers());
});

userRouter.post("/users", emailExistsMiddleware, (req, res) => {
  const { name, email, type, password } = req.body;
  const newUser = { id: users.length + 1, name, email, type, password, };
  res.status(201).json(userService.createUser(newUser));
});

userRouter.put("/users/:id", emailExistsMiddleware, (req, res) => {
  const { id } = req.params;
  const { name, email, type, password } = req.body;
  const newData = { id: Number(id), name, email, type, password, };

  userService.updateUser(newData);
  res.status(200).send();
});

userRouter.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  userService.deleteUser(Number(id));
  res.status(200).send();
});

export default userRouter;
