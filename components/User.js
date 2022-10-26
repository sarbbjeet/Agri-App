import { View, Text } from 'react-native'
import React from 'react'
import { UserContext } from '../context/MQTTContext'

export default function User() {
    const state= React.useContext(UserContext);
  return (
    <View>
      <Text>client is `{state.connected ? 'connected' : 'disconnected'}`</Text>
    </View>
  )
}