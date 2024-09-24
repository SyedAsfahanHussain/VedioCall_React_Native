import { ActivityIndicator, Modal,  View } from 'react-native'
import React from 'react'
import { Color } from '../theme/Color';
import { GlobalStyle } from '../theme/GlobalStyle';

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent >
      <View style={GlobalStyle.container}>
        <ActivityIndicator size={'large'} color={Color.primary}/>
      </View>
    </Modal>
  );
}

export default Loader

