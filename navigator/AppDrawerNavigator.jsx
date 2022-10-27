import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import VoucherTabs from "./tabs/VoucherTabs";
import Home from '../screens/Home';
import {useSelector} from 'react-redux';
// import VoucherListFavourites from "../screens/VoucherListFavourites";
// import VoucherListRedeemed from "../screens/VoucherListRedeemed";
// import VoucherListRelated from "../screens/VoucherListRelated";
import CustomDrawer from '../components/CustomDrawer';
import NodeScanning from '../screens/NodeScanning';
import Settings from '../screens/Settings';
// import { moderateScale } from "../components/Scaling";
// import RedeemModal from "../components/RedeemModal";
// import SwitchBook from "../screens/SwitchBook";
// import Rules from "../screens/Rules";

const DrawerView = createDrawerNavigator();
export default function AppDrawerNavigator() {
  // const state = useSelector((state) => state);
  // const getTabColor = () => {
  //   const defaultColor = "#D90080";
  //   const highlightColors = ["#C3D03D", "#00AC9F", "#FF2749"];
  //   if (state.vouchers.currentSelectedCategory !== undefined)
  //     return highlightColors[state.vouchers.currentSelectedCategory - 1];
  //   return defaultColor;
  // };

  // const getTitle = () => {
  //   const titles = [
  //     "Leisure & Days Out",
  //     "Restaurants & Dining Out",
  //     "Hair & Beauty",
  //   ];
  //   return titles[state.vouchers.currentSelectedCategory - 1];
  // };
  return (
    <DrawerView.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      }}>
      <DrawerView.Screen
        name="dVTabs"
        component={VoucherTabs}
        options={{
          title: getTitle(),
          // headerRight: () => (
          //   <View>
          //     <Text>Filter</Text>
          //   </View>
          // ),
        }}
      />
      <DrawerView.Screen
        name="dHome"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />
      <DrawerView.Screen
        name="dScanning"
        component={NodeScanning}
        options={{
          title: 'Scanning',
          headerStyle: {
            backgroundColor: '#D90080',
          },
        }}
      />

      <DrawerView.Screen
        name="dSettings"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#D90080',
          },
        }}
      />
    </DrawerView.Navigator>
  );
}
