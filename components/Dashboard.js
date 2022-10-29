import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { moderateScale } from "../Scaling";
import RoundIndicator from "./RoundIndicator";
import { colors } from "../constants/colors";
import Sprinkler from "./Sprinkler";
import { fieldTypes } from "../constants/fieldTypes";
import { useEffect } from "react";

const field = {
  name: "wheat Field",
  addr: "mamumajra, ts1 4lz",
};
export default function Dashboard({
  title = "field_title",
  addr = "address",
  field_id = 0,
  temerature = 10.5,
  moisture = 20,
  sprinklerStatus = false,
  numberOfDashboard = 1,
  sprinklerEvent, //method
}) {
  return (
    <View
      className={`border-gray-300 border rounded-t-2xl shadow bg-gray-50 ${
        numberOfDashboard == 1 ? "w-full" : "w-11/12"
      }`}
    >
      <View>
        <Image
          style={styles.bannerImage}
          className="rounded-t-xl"
          source={
            fieldTypes?.find((field) => field.id == field_id)?.image ||
            fieldTypes[0]?.image
          }
        />
      </View>
      {/* body */}
      <View className="h-2/3 px-2">
        {/* header text */}
        <View className="mt-3">
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.subHeaderText}>{addr}</Text>
        </View>
        <View className="flex flex-row justify-around py-2 flex-wrap">
          <RoundIndicator
            activeStrokeColor={colors.primary}
            value={temerature}
          />
          <RoundIndicator
            title="Soil Moisture"
            isFloatValue={false}
            valueSuffix="%"
            maxValue={100}
            activeStrokeColor={colors.yellow_}
            value={moisture}
          />
        </View>
        <View className="flex items-center">
          <Sprinkler
            powerStatus={sprinklerStatus}
            onClick={() => console.log("click me")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: moderateScale(170),
    resizeMode: "stretch",
  },
  text: {
    fontFamily: "BalooBhai_bold",
  },
  headerText: {
    fontFamily: "BalooBhai_bold",
    textTransform: "capitalize",
    fontSize: moderateScale(22),
    // backgroundColor: "red",
    alignItems: "center",
  },
  subHeaderText: {
    fontFamily: "BalooBhai_regular",
    fontSize: moderateScale(20),
    lineHeight: 26,
  },
});
