import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/auth/AuthNavigator';

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;