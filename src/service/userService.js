import userRepository from '../data/userRepository.js';

const userService = {
  getUsers: () => {
    return userRepository.getFromFile();
  },
  createUser: (newUser) => {
    const users = userRepository.getFromFile();
    users.push(newUser);
    userRepository.updateFile(users);
  },
  updateUser: (newData) => {
    const users = userRepository.getFromFile();
    const userIndex = users.findIndex(user => user.id == newData.id);
    if (userIndex >= 0) users[userIndex] = newData;
    userRepository.updateFile(users);
  },
  deleteUser: (userId) => {
    let users = userRepository.getFromFile();
    users = users.filter(user => user.id != userId);
    userRepository.updateFile(users);
  },
};

export default userService;