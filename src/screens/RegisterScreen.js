import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity} from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import {GlobalStyle} from '../theme/GlobalStyle';
import Loader from '../components/Loader';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const register = async () => {
    if (username && email && password) {
      setLoading(true);

      try {
        const userCredentials = await getAuth().createUserWithEmailAndPassword(
          email,
          password,
        );
        //  console.log(userCredentials.user);
        await getFirestore()
          .collection('users')
          .doc(userCredentials.user.uid)
          .set({
            email,
            username,
            password,
          });
           setLoading(false);
           
          navigation.navigate('login');
      } catch (error) {
        setLoading(false);
        Alert.alert(error.message);
      }
       
    } else {
      Alert.alert('please fill all the fields');
    }
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        style={GlobalStyle.input}
        onChangeText={setUsername}
      />
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

      <TouchableOpacity style={GlobalStyle.primarybutton} onPress={register}>
        <Text style={GlobalStyle.btntext}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={GlobalStyle.primarybutton}
        onPress={() => navigation.navigate('login')}>
        <Text style={GlobalStyle.btntext}>Login</Text>
      </TouchableOpacity>
      <Loader visible={loading} />
    </AuthLayout>
  );
};

export default RegisterScreen;
