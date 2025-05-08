import userRepository from '../data/userRepository.js';

const userService = {
  getUsers: async () => {
    return await userRepository.getFromFile();
  },
  createUser: async (newUser) => {
    const users = await userRepository.getFromFile();
    users.push(newUser);
    userRepository.updateFile(users);
  },
  updateUser: async (newData) => {
    const users = await userRepository.getFromFile();
    const userIndex = users.findIndex(user => user.id == newData.id);
    if (userIndex >= 0) users[userIndex] = newData;
    userRepository.updateFile(users);
  },
  deleteUser: async (userId) => {
    let users = await userRepository.getFromFile();
    users = users.filter(user => user.id != userId);
    userRepository.updateFile(users);
  },
};

export default userService;