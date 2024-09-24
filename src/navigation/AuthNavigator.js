import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { Color } from '../theme/Color';

const NativeStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NativeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Color.primary,
      },
      headerTitleStyle:{
        color: Color.white
      }
    }}>
      <NativeStack.Screen name="login" component={LoginScreen} />
      <NativeStack.Screen name="register" component={RegisterScreen} />
    </NativeStack.Navigator>
  );
};

export default AuthNavigator;
