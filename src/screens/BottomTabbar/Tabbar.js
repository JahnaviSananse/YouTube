import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {IMAGE} from '../../assets/images/images';
import {TextFile} from '../screens';
import Shorts from '../Shorts/index';
import Home from '../Home/index';
import Subscription from '../Subscription/index';
import Library from '../Library/index';
import Add from '../Add';
import {HomeScreen} from '../Stacks/HomeScreen';
//import { BottomTabBar } from '@react-navigation/bottom-tabs';

const Tabbar = createMaterialBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.HOME} />,
    },
  },

  Shorts: {
    screen: Shorts,
    navigationOptions: {
      tabBarLabel: 'Shorts',
      // activeColor: 'red',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.Shorts} />,
    },
  },

  Add: {
    screen: Add,
    navigationOptions: {
      tabBarLabel: '.',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.addIcon} source={IMAGE.ADD} />,
    },
  },

  Subscription: {
    screen: Subscription,
    navigationOptions: {
      tabBarLabel: 'Subscriptions',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => (
        <Image style={styles.icon} source={IMAGE.SUBSCRIPTION} />
      ),
    },
  },

  Library: {
    screen: Library,
    navigationOptions: {
      tabBarLabel: 'Library',
      //activeColor: 'black',
      barStyle: {backgroundColor: 'white'},
      tabBarIcon: () => <Image style={styles.icon} source={IMAGE.VIDEO} />,
    },
  },
});

export default createAppContainer(Tabbar);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    bottom: 5,
    //alignSelf: 'center',
    //marginRight: 30,
    //marginLeft: 10,
  },
  addIcon: {
    width: 45,
    height: 45,
    bottom: 7,
    //alignSelf: 'center',
    //marginRight: 30,
    //marginLeft: 10,
  },
});
