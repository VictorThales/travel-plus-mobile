import React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import { PersonalData } from '../features/profile/screens/PersonalData/PersolnalData';
import { TabNavigator } from './TabNavigator';
import { View } from 'react-native';
import { Travel } from '../features/travels/screens/travel';
import { AddDestination } from '../features/travels/screens/destination/addDestination';
import { AddCompanion } from '../features/travels/screens/companion/addCompanion';
import { AddPlace } from '../features/travels/screens/place/addPlace';
import { AddTravel } from '../features/travels/screens/travel/addTravel';
import { Statistics } from '../features/profile/screens/Statistics';
import { Register } from '../features/profile/screens/Register';
import { UpdatePassword } from '../features/profile/screens/UpdatePassword';
import { ForgetPassword } from '../features/profile/screens/ForgetPassword';
import { Login } from '../features/profile/screens/Login';

const Stack = createStackNavigator();

export function RoutesStack() {
  const headerStyle: StackNavigationOptions = {
    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
    headerTitleAlign: 'center',
    headerTintColor: '#556B2F',
    headerBackground: () => (
      <View
        style={{
          flex: 1,
          borderStyle: 'solid',
          borderBottomWidth: 0.5,
          borderColor: '#00000050',
        }}
      ></View>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={TabNavigator}
      />

      <Stack.Screen
        options={{
          headerTitle: 'Dados Pessoais',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: 'Perfil',
        }}
        name="PersonalData"
        component={PersonalData}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Viagem',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="Travel"
        component={Travel}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Adicionar Destino',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="AddDestination"
        component={AddDestination}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Adicionar Acompanhantes',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="AddCompanion"
        component={AddCompanion}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Adicionar Lugar',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="AddPlace"
        component={AddPlace}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Adicionar Viagem',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="AddTravel"
        component={AddTravel}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Estatísticas',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="Statistics"
        component={Statistics}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Cadastro',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Alterar senha',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="UpdatePassword"
        component={UpdatePassword}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Recuperar Senha',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Login',
          ...headerStyle,
          headerShown: true,
          headerBackTitle: '',
        }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}
