import {Image, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../theme/GlobalStyle';
import Logo from '../assets/icon2.png';

const AuthLayout = ({children}) => {
  return (
    <View style={GlobalStyle.container}>
      <Image source={Logo} style={GlobalStyle.logo} />
      {children}
    </View>
  );
};

export default AuthLayout;
