import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {Feather,Ionicons,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons,AntDesign,Entypo} from 'react-native-vector-icons';

import HomeStackScreen from './HomeScreen'
import ChatStackScreen from '../chats/ChatScreen' 
import GameStackScreen from'../games/GameScreen';
import NotificationStackScreen from './Notification'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {useTheme} from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialBottomTabNavigator();


const MaintabScreen=()=>{
  const{colors}=useTheme()
  //const tabcolor =colors.background
  return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.text}
      //style={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ( { color }) => (
            <AntDesign name="home" size={24} color={colors.text} />
          ),
          tabBarColor:colors.background
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={24} color={colors.text} />
          ),
          tabBarColor:colors.background
        }}
      />
      <Tab.Screen
        name="Game"
        component={GameStackScreen}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-variant-outline" size={24} color={colors.text} />
          ),
          tabBarColor:colors.background
        }}
      />
       <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications-outline" size={24} color={colors.text} />
          ),
          tabBarColor:colors.background
        }}
      />
   </Tab.Navigator>
  )
}
export default MaintabScreen;



