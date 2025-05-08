import userService from '../service/userService.js';

export const emailExistsMiddleware = async (req, res, next) => {
  const { email } = req.body;
  let users = [];
  users = await userService.getUsers();

  if (!req.params.id && users.filter((user) => user.email === email).length > 0) {
    console.log('email ', users.filter((user) => user.email === email));
    return res.status(400).json({ message: 'Email já cadastrado.' });
  }
  next();
};

