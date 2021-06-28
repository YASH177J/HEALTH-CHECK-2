import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :  <Image  source={{
            uri:
              'https://image.flaticon.com/icons/png/512/1934/1934437.png',
          }} style={{width:40, height:40}}/>,
      tabBarLabel : "YOUR REPORTS",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image  source={{
            uri:
              'https://image.flaticon.com/icons/png/512/2756/2756728.png',
          }} style={{width:40, height:40}}/>,
      tabBarLabel : "ADD REPORT",
    }
  }
});
