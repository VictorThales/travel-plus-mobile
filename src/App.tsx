/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationComponent } from './routes/NavigationComponent';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <NavigationComponent />
    </AuthProvider>
  );
}

export default App;
