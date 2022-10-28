import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import RootNavigationSatck from "./navigator/RootNavigationSatck";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
const Stack = createNativeStackNavigator();

import { useFonts } from "expo-font";
import { fonts } from "./constants/fontFamily";
export default function App() {
  const [loaded] = useFonts(fonts); //add fontfamilys

  if (!loaded) {
    return null;
  }
  return (
    <>
      {/* <View
        style={{ height: Constants.statusBarHeight }}
        className="bg-green-600"
      /> */}
      <RootNavigationSatck />
    </>
  );
  // <View>
  {
    /* <View
        style={{ height: Constants.statusBarHeight }}
        className="bg-green-600"
      /> */
  }
  {
    /* <RootNavigationSatck /> */
  }
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
