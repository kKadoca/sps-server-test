import fs from "fs";

const userRepository = {
  getFromFile: () => {
    return JSON.parse(fs.readFileSync('data/users.json'));
  },

  updateFile: (users) => {
    fs.writeFileSync('data/users.json', JSON.stringify(users));
  },
};

export default userRepository;