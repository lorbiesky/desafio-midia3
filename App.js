import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import NavContainer from './src/navigation';

function App() {
  return (
    <>
      <StatusBar style="default" hidden translucent={false} />
      <NavigationContainer>
        <NavContainer />
      </NavigationContainer>
    </>
  );
}

export default App;
