import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {GlobalStyle} from '../theme/GlobalStyle';
import {Color} from '../theme/Color';
import UseAuth from '../store/UseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckCredentialsScreen = ({navigation}) => {
  const setUser = UseAuth(state => state.setUser);

  useEffect(() => {
    (async () => {
      const userString = await AsyncStorage.getItem('user');
      if (userString) {
        setUser(JSON.parse(userString));
        navigation.reset({
          index: 0,
          routes: [{name: 'main'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'auth'}],
        });
      }
    })();
  }, []);

  return (
    <View style={GlobalStyle.container}>
      <ActivityIndicator size={'large'} color={Color.indicator} />
    </View>
  );
};

export default CheckCredentialsScreen;
