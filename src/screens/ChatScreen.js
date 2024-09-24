import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChatScreen({navigation}) {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue !== null) {
        setUser(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Error retrieving data', e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <ZegoUIKitPrebuiltCall
          appID={459059526}
          appSign={"ff2ad75a5dd4814ce3122903487857cbdaaeeb43813d93a5c051f63c9c3dbba5"}
          userID={user.id}
          userName={user.id} // Assuming user.name exists, otherwise fallback to user.id
          callID={"DEMO12345"}
          config={{
            ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
            ringtoneConfig: {
              incomingCallFileName: 'zego_incoming.mp3',
              outgoingCallFileName: 'zego_outgoing.mp3',
            },
            notifyWhenAppRunningInBackgroundOrQuit: true,
            androidNotificationConfig: {
              channelId: 'zego_video_call',
              channelName: 'Zego Video Call',
            },
            onCallEnd: (callID, reason, duration) => {
              navigation.navigate('home');
            },
          }}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
