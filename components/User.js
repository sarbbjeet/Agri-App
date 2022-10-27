import {View, Text} from 'react-native-tailwind';
import React from 'react';
import {UserContext} from '../context/MQTTContext';
import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
export default function User() {
  const state = React.useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text>
        react native is {state.connected ? 'connected' : 'not connected'}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
});
