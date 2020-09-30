import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Burger from './src/screens/burger';
import Fries from './src/screens/fries';
import Pizza from './src/screens/pizza';
import Home from './src/screens/home';
import MyProfile from './src/screens/myProfile';
import FeedBack from './src/screens/feefback';
import ItemSearch from './src/screens/itemSearch';
import CategoriList from './src/screens/categoriList';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={Home} />
    //     <Drawer.Screen name="MyProfile" component={MyProfile} />
    //     <Drawer.Screen name="FeedBack" component={FeedBack} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator initialRouteName="Pizza">
        <Tab.Screen name="Burger" component={Burger} />
        <Tab.Screen name="Pizza" component={Pizza} />
        <Tab.Screen name="Fries" component={Fries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
