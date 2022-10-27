import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppDrawerNavigator from './AppDrawerNavigator';
import NodeScanning from '../screens/NodeScanning';
import {colors} from '../theme/colors';
import {navBarHeader} from '../theme/fonts';
const Stack = createNativeStackNavigator();
export default function RootNavigationSatck() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              fontSize: navBarHeader.fontSize,
              fontWeight: navBarHeader.fontWeight,
            },
            headerTintColor: navBarHeader.fontColor,
          }}>
          {/* {users.token ? (
                        //screens for login user */}
          <Stack.Group>
            <Stack.Screen
              name="drawer"
              component={AppDrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={Home} />

            {/* <Stack.Screen
              name="nodeScanning"
              component={NodeScanning}
              // options={{headerShown: false}}
            /> */}
          </Stack.Group>
          {/* ) : (
                        //Auth screens
                        <Stack.Group screenOptions={{ headerShown: false }}>
                          <Stack.Screen name="Login" component={Login} />
                        </Stack.Group>
                      )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
