import jwt from 'jsonwebtoken';
import userService from './userService.js';

const authService = {
  login(email, password) {
    const users = userService.getUsers();
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) return null;

    const token = jwt.sign(
        { id: user.id, email: user.email, type: user.type },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
  }
};

export default authService;