import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppDrawerNavigator from "./AppDrawerNavigator";
import VoucherInfo from "../screens/VoucherInfo";
import { moderateScale } from "../components/Scaling";
import VoucherRedeem from "../screens/VoucherRedeem";
import Rules from "../screens/Rules";
import { connectToServer } from "../store/actions/util";

const Stack = createNativeStackNavigator();
export default function RootNavigationSatck() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  //vailidate token
  useEffect(() => dispatch(connectToServer(users.token, users.loginUid)), []);

  //console.log("users..", users);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {users.token ? (
            //screens for login user
            <Stack.Group>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="drawer"
                component={AppDrawerNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="voucherInfo"
                component={VoucherInfo}
                options={({ route }) => ({
                  title: route.params.title,
                  headerStyle: {
                    backgroundColor: route.params.backgroundColor,
                  },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontSize: moderateScale(16),
                    fontWeight: "bold",
                  },
                })}
              />
              <Stack.Screen
                name="voucherRedeem"
                component={VoucherRedeem}
                options={({ route }) => ({
                  title: route.params.title,
                  headerStyle: {
                    backgroundColor: route.params.backgroundColor,
                  },
                  headerTintColor: "white",
                  headerTitleStyle: {
                    fontSize: moderateScale(16),
                    fontWeight: "bold",
                  },
                })}
              />
            </Stack.Group>
          ) : (
            //Auth screens
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
