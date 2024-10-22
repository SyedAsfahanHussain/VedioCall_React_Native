import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';
import ZegoUIKitPrebuiltCallService, {
  ZegoCallInvitationDialog,
  ZegoUIKitPrebuiltCallWaitingScreen,
  ZegoUIKitPrebuiltCallInCallScreen,
  ZegoSendCallInvitationButton,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {getFirestore} from '@react-native-firebase/firestore';
import UseAuth from '../store/UseAuth';
import {GlobalStyle} from '../theme/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const user = UseAuth(state => state.user);
  const setUser = UseAuth(state => state.setUser);
  const [contacts, setContacts] = useState([]);

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{name: 'auth'}],
    });
  };

  useEffect(() => {
    initService();
    getUsers();
  }, [user]);
  const initService = () => {};
  const getUsers = async () => {
    const userDocs = await getFirestore()
      .collection('users')
      .where('email', '!=', user.email)
      .get();
    const users = [];
    userDocs.forEach(doc => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setContacts(users);
  };

  return (
    <View style={GlobalStyle.container}>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <View style={styles.contact}>
            <Text style={styles.username}>{item.username}</Text>

            <View style={styles.actionBtns}>
              <TouchableOpacity
                style={GlobalStyle.primarybutton}
                onPress={() => navigation.navigate('chat')}>
                <Text style={styles.username}>
                  <FontAwesomeIcon icon={faVideo} size={32} color={'#000'} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistcontainer}
      />
      <TouchableOpacity onPress={logout}>
        <Text style={GlobalStyle.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  actionBtns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatlistcontainer: {
    width: width,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
