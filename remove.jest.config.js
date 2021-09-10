module.exports = {
  testEnvironment: "node",
  collectCoverageFrom: ["<rootDir>/**/{!(index),}.js"],
  transform: {
  "\\.[jt]sx?$": "babel-jest"
  }
};
