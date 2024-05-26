import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {PersonalData} from '../features/profile/screens/PersonalData/PersolnalData';
import {TabNavigator} from './TabNavigator';
import {View} from 'react-native';
import {Travel} from '../features/travels/screens/travel';
import {AddDestination} from '../features/travels/screens/destination/addDestination';
import {AddCompanion} from '../features/travels/screens/companion/addCompanion';
import {AddPlace} from '../features/travels/screens/place/addPlace';
import {AddTravel} from '../features/travels/screens/travel/addTravel';

const Stack = createStackNavigator();

export function RoutesStack() {
  const headerStyle: StackNavigationOptions = {
    headerTitleStyle: {fontSize: 25, fontWeight: 'bold'},
    headerTitleAlign: 'center',
    headerTintColor: '#556B2F',
    headerBackground: () => (
      <View
        style={{
          flex: 1,
          borderStyle: 'solid',
          borderBottomWidth: 0.5,
          borderColor: '#00000050',
        }}></View>
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
    </Stack.Navigator>
  );
}
