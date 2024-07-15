import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RoutesStack } from './Routes.stack';

export const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <RoutesStack />
    </NavigationContainer>
  );
};
