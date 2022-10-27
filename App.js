import React, {useEffect, useState} from 'react';
import MQTT from 'sp-react-native-mqtt';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import User from './components/User';
import MQTTContext from './context/MQTTContext';
import RootNavigationSatck from './navigator/RootNavigationSatck';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
      }}>
      <StatusBar
        backgroundColor={'red'}
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      > */}
      {/* <MQTTContext>
        <User />
      </MQTTContext> */}
      <RootNavigationSatck />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
