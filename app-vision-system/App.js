import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Login';
import { Menu } from './Menu';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}