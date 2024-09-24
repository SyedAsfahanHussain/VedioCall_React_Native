import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ZegoUIKitPrebuiltCallWaitingScreen,
  ZegoUIKitPrebuiltCallInCallScreen,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import { Color } from '../theme/Color';

const NativeStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.primary,
        },
        headerTitleStyle: {
          color: Color.white,
        },
      }}>
      <NativeStack.Screen name="home" component={HomeScreen} />
      <NativeStack.Screen name="chat" component={ChatScreen} />
      <NativeStack.Screen
        options={{headerShown: false}}
        // DO NOT change the name
        name="ZegoUIKitPrebuiltCallWaitingScreen"
        component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <NativeStack.Screen
        options={{headerShown: false}}
        // DO NOT change the name
        name="ZegoUIKitPrebuiltCallInCallScreen"
        component={ZegoUIKitPrebuiltCallInCallScreen}
      />
    </NativeStack.Navigator>
  );
};

export default MainNavigator;
