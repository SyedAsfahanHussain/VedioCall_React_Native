import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import CheckCredentialsScreen from '../screens/CheckCredentialsScreen';

const NativeStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NativeStack.Navigator screenOptions={
      {
        headerShown:false,
      }
    }>
      <NativeStack.Screen
        name="crdentials"
        component={CheckCredentialsScreen}
      />
      <NativeStack.Screen name="auth" component={AuthNavigator} />
      <NativeStack.Screen name="main" component={MainNavigator} />
    </NativeStack.Navigator>
  );
};

export default RootNavigator;
