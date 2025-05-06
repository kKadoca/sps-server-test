import userService from '../service/userService.js';

export const emailExistsMiddleware = (req, res, next) => {
  const { email } = req.body;
  const users = userService.getUsers();

  if (users.find((user) => user.email === email)) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
  }
  next();
};

