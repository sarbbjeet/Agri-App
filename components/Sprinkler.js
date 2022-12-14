import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { moderateScale } from "../Scaling";
import { colors } from "../constants/colors";

export default function Sprinkler({ powerStatus = false, onClick }) {
  //   const [pStatus, setStatus] = useState(powerStatus);
  return (
    <View className="w-36 shadow pb-2">
      <Text style={styles.title}>Sprinker</Text>
      <TouchableOpacity
        onPress={onClick}
        className={`bg-white p-1 rounded-2xl shadow-lg shadow-black-200 border-2 ${
          powerStatus ? "border-red-500" : "border-pink-100"
        }  `}
      >
        <Image
          source={
            powerStatus
              ? require("../resources/sprinkler_on.png")
              : require("../resources/sprinkler_off.png")
          }
          style={styles.imageStyle}
        />
        <Text
          style={{
            ...styles.status,
            color: powerStatus ? colors.sprinker_on : colors.sprinker_off,
          }}
        >
          {powerStatus ? "Power on" : "Power off"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_semibold",
    fontSize: moderateScale(14),
    color: colors.dark_text,
    textAlign: "center",
    paddingVertical: 5,
  },
  status: {
    fontFamily: "BalooBhai_semibold",
    fontSize: moderateScale(16),
    position: "absolute",
    bottom: 0,
    width: "100%",
    // color: "red",
    textAlign: "center",
    marginLeft: 3,
    // left: "25%",
  },
  imageStyle: {
    width: "100%",
  },
});
