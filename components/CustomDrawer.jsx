import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { moderateScale, verticalScale } from "../Scaling";
import { navheaderFont } from "../constants/theme";
const menuRoutes = [
  {
    id: 1,
    title: "Home",
    route: "dHome",
  },
  {
    id: 2,
    title: "Configure Gateway",
    route: "dSettings",
  },
  {
    id: 3,
    title: "About",
    route: "dAbout",
  },
];

const Item = ({ title, route, navigation }) => {
  const [event, setEvent] = useState(false);
  return (
    <TouchableOpacity
      style={{
        ...styles.listItem,
        backgroundColor: event ? "#ccc" : "white",
      }}
      onPress={() => {
        navigation.dispatch(DrawerActions.toggleDrawer());
        navigation.navigate(route);
      }}
    >
      <Text style={styles.drawerItemText}> {title} </Text>
    </TouchableOpacity>
  );
};

const AppButton = ({ title = "button", onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.listItem,
      }}
      onPress={onPress}
    >
      <Text style={styles.drawerItemText}> {title} </Text>
    </TouchableOpacity>
  );
};

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          ...styles.Container,
          backgroundColor: navheaderFont.backgroundColor,
        }}
      >
        <Text style={styles.mTitle}> Your Membership Number </Text>
        <Text
          style={{
            ...styles.text,
            fontSize: 25,
            marginTop: 5,
            fontWeight: "700",
          }}
        >
          893948
        </Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView style={{ width: "100%", marginTop: 4 }}>
          {menuRoutes.map(({ id, title, route }) => (
            <View key={id}>
              <Item title={title} route={route} {...props} />
              <View style={styles.divider} />
            </View>
          ))}
          <AppButton title="Logout" />
        </ScrollView>
      </View>
      <View
        style={{
          ...styles.footer,
          backgroundColor: "green",
        }}
      >
        <Text style={styles.changeBook}> Active Voucher Book </Text>
        <Text style={styles.activeBook}> harry potter </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    letterSpacing: 1.2,
    color: "#fff",
  },
  Container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 2,
    backgroundColor: navheaderFont.backgroundColor,
  },
  drawerItem: {
    paddingVertical: moderateScale(20),
    paddingLeft: 10,
  },
  drawerItemText: {
    fontSize: 18,
  },

  listItem: {
    paddingLeft: moderateScale(20),
    paddingVertical: moderateScale(8),
    marginLeft: 5,
    borderBottomWidth: 0,
  },
  divider: {
    width: "100%",
    height: 1,
    marginVertical: moderateScale(10),
    backgroundColor: "#eee",
  },
  footer: {
    backgroundColor: "#D90080",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  changeBook: {
    color: "#FDBCE2",
    fontSize: moderateScale(16),
  },
  mTitle: {
    color: "#FDBCE2",
    fontSize: moderateScale(16),
  },
  activeBook: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(20),
  },
});
