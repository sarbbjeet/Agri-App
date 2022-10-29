import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    // <View className="flex-1">
    <View className="mx-2 mt-6">
      <Text
        className="font-bold text-2xl text-gray-700"
        style={styles.fontFamily}
      >
        Dashboard
      </Text>
      <View style={styles.divider} />
      <View className="mt-4">
        <Dashboard />
      </View>
    </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: "BalooBhai_bold",
  },
  divider: {
    height: 1,
    // width: "100%",
    backgroundColor: "#aaaaaa",
  },
});
