jest.mock('react-native-gesture-handler', () => {
    const mock = require('react-native-gesture-handler/jestSetup');
    return mock;
  });
  import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

  jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);