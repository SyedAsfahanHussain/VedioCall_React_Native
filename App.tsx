import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import Invitation from './src/components/Invitation';
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Invitation></Invitation>
      <RootNavigator/>
    </NavigationContainer>
  );
}

export default App;
