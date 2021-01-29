import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/Home';
import Register from '../screens/Register';
import About from '../screens/About';
import Purchases from '../screens/Purchases';

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Purchases" component={Purchases} />
    </Stack.Navigator>
  );
};

export default MainStack;
