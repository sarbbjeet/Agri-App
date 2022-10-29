import { View, Text } from "react-native";
import React from "react";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <View
      className="bg-red-500"
      //  style={{ flex: 1, backgroundColor: "red" }}
    >
      <Text className="bg-red-800"> hello</Text>
      <Dashboard />
    </View>
  );
}
