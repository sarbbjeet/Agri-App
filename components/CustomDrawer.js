import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {DrawerActions} from '@react-navigation/native';
// import {moderateScale, verticalScale} from './Scaling';
// import {logout} from '../store/actions/users';

const menuRoutes = [
  {
    id: 1,
    title: 'Home',
    route: 'Home',
  },
  {
    id: 2,
    title: 'Scanning',
    route: 'dScannings',
  },
  {
    id: 3,
    title: 'Settings',
    route: 'dSettings',
  },
];

const Item = ({title, route, navigation}) => {
  const [event, setEvent] = useState(false);
  return (
    <TouchableOpacity
      style={{
        ...styles.listItem,
        backgroundColor: event ? '#ccc' : 'white',
      }}
      onPress={() => {
        // setEvent(true);
        // setTimeout(() => {
        //   setEvent(false);
        // }, 150);
        navigation.dispatch(DrawerActions.toggleDrawer());
        navigation.navigate(route);
      }}>
      <Text style={styles.drawerItemText}>{title}</Text>
    </TouchableOpacity>
  );
};

const AppButton = ({title = 'button', onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.listItem,
      }}
      onPress={onPress}>
      <Text style={styles.drawerItemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function CustomDrawer(props) {
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState({});
  //   const {users} = useSelector(state => state);
  //   const {selectedUserBookId, loginUid} = users;
  const headerBackgroundColor = '#D90080';

  //   const handleLogout = loginUid => {
  //     dispatch(logout(loginUid));
  //   };
  //   useEffect(() => {
  //     var book = users.userBooks?.find(
  //       userBook => userBook.id == selectedUserBookId,
  //     );
  // setSelectedBook(book);
  //     if (typeof book !== 'undefined')
  //       dispatch({
  //         type: 'SET_SELECTED_USER_BOOK',
  //         userBookId: users?.userBooks[0]?.id,
  //       });

  //     return () => {};
  //   }, [selectedUserBookId]);

  return (
    <View style={{flex: 1}}>
      {/* <StatusBar backgroundColor={"#D90080"} /> */}
      <View
        style={{
          ...styles.Container,
          backgroundColor: headerBackgroundColor,
        }}>
        <Text style={styles.mTitle}>Your Membership Number</Text>
        <Text
          style={{
            ...styles.text,
            fontSize: 25,
            marginTop: 5,
            fontWeight: '700',
          }}>
          738979
        </Text>
      </View>
      <View style={{flex: 8}}>
        <ScrollView style={{width: '100%', marginTop: 4}}>
          {menuRoutes.map(({id, title, route}) => (
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
          backgroundColor: headerBackgroundColor,
        }}>
        <Text style={styles.changeBook}>Active Voucher Book</Text>
        <Text style={styles.activeBook}>book 12</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    letterSpacing: 1.2,
    color: '#fff',
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 2,
    backgroundColor: 'red',
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
    width: '100%',
    height: 1,
    marginVertical: moderateScale(10),
    backgroundColor: '#eee',
  },
  footer: {
    backgroundColor: 'red',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  changeBook: {
    color: '#FDBCE2',
    fontSize: moderateScale(16),
  },
  mTitle: {
    color: '#FDBCE2',
    fontSize: moderateScale(16),
  },
  activeBook: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
});
