import fs from "fs";

function getFilePath() {
  return fs.realpathSync('./src/data/users.json');
};

const userRepository = {
  getFromFile: () => {
    return JSON.parse(fs.readFileSync(getFilePath())) ?? [];
  },

  updateFile: (users) => {
    fs.writeFileSync(getFilePath(), JSON.stringify(users));
  },
};

export default userRepository;