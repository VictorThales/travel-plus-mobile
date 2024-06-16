module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@react-navigation)'
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
