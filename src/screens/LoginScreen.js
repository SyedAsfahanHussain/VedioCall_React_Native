import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity} from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import {GlobalStyle} from '../theme/GlobalStyle';
import {getAuth, useDeviceLanguage} from '@react-native-firebase/auth';
import {getFirestore} from '@react-native-firebase/firestore';
import Loader from '../components/Loader';
import UseAuth from '../store/UseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const setUser = UseAuth(state => state.setUser);

  const login = async () => {
    if (email && password) {
      setLoading(true);

      try {
        const userCredentials = await getAuth().signInWithEmailAndPassword(
          email,
          password,
        );
        const userData = await getFirestore()
          .collection('users')
          .doc(userCredentials.user.uid)
          .get();
        if (userData.exists) {
          await AsyncStorage.setItem(
            'user',
            JSON.stringify({
              id: userData.id,
              ...userData.data(),
            }), 
          );
          setUser({
            id: userData.id,
            ...userData.data(),
          });

          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{name: 'main'}],
          });

          
        }
      } catch (error) {
        // Alert.alert(error.message);
        Alert.alert('Register your self first');
      }
      setLoading(false);
    } else {
      Alert.alert('Please fill ot all the fields');
    }
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="Email"
        style={GlobalStyle.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={GlobalStyle.input}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={GlobalStyle.primarybutton} onPress={login}>
        <Text style={GlobalStyle.btntext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={GlobalStyle.primarybutton}
        onPress={() => navigation.navigate('register')}>
        <Text style={GlobalStyle.btntext}>Register</Text>
      </TouchableOpacity>
      <Loader visible={loading} />
    </AuthLayout>
  );
};

export default LoginScreen;
