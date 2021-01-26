import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HamburguerMenu from '../../components/hamburguerMenu';
import SearchButton from '../../components/searchButton';

const Stack = createStackNavigator();

import Home from '../screens/Home';

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: null,
        headerLeft: () => <HamburguerMenu />,
        headerRight: () => <SearchButton />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
