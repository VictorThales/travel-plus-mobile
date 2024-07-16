import * as React from 'react';
import { View } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Profile } from '../features/profile/screens/Profile';
import { Travels } from '../features/travels/screens/travelList/';
import { AddTravel } from '../features/travels/screens/travel/addTravel';
import { Login } from '../features/profile/screens/Login';
import { useAuthStore } from '../stores/useAuthStore';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const user = useAuthStore((state) => state.user);

  const headerStyle: BottomTabNavigationOptions = {
    headerTitle: 'Travel +',
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
    <Tab.Navigator
      initialRouteName="Initial"
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Initial"
        component={Travels}
        options={{
          ...headerStyle,
          tabBarLabel: 'Viagens',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="location-arrow"
              size={30}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddTravel}
        options={{
          ...headerStyle,
          tabBarLabel: 'Add',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="plus-circle"
              size={40}
              color={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={!user?.id ? Login : Profile}
        options={{
          ...headerStyle,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={30} color={focused ? 'black' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
