import React, {useEffect, useState} from 'react';
import {colors} from './theme/colors';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import User from './components/User';
import MQTTContext from './context/MQTTContext';
import RootNavigationSatck from './navigator/RootNavigationSatck';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
      }}>
      <StatusBar
        backgroundColor={colors.primary}
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
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

export default App;
