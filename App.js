import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import Storage from './src/storage/Storage'


const Stack = createStackNavigator();

export default function App() {

  const loginState = AsyncStorage.getItem('usuario');

  if (loginState === 'true') {
      setLoginState(true);
  } 

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name = "Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name = "Details" component={DetailsScreen} options={{headerShown: false}}/>
        <Stack.Screen name = "Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
