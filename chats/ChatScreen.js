import * as React from 'react';
import { View, Text, Button,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import NewMessageButton from './NewMessageButton/index'
import ChatListItem from './chat-lestitem/index'

import {useTheme} from '@react-navigation/native'

import {AntDesign} from 'react-native-vector-icons';


const Stack = createStackNavigator();

const ChatStackScreen =()=>{

  const{colors}=useTheme()

  return(
  <Stack.Navigator>
        <Stack.Screen name="Chats" component={ChatScreen} options={{
                headerRight:()=>(
                    <View style={{marginRight:15}}>
                    <AntDesign name="search1" size={24} color={colors.text}/>
                    </View>
                ),}} />
  </Stack.Navigator>
  )
};

const Users =[
  {
    id:"1",
    name:"Rakshith",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'King Rakshith',
  },
  {
    id:"2",
    name:"Arjun",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello chinnu',
  },
  {
    id:"3",
    name:"Sheela",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'Namaste madam',
  },
  {
    id:"4",
    name:"Shashi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hi darling',
  },
  {
    id:"5",
    name:"Hima",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'Ley uta ayta',
  },
  {
    id:"6",
    name:"suman",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'yen madtaeeediya macha',
  },
  {
    id:"7",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"8",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"9",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"10",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"11",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"12",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
  {
    id:"13",
    name:"Mahi",
    imageUri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
    content:'hello Mahi',
  },
]

function ChatScreen() {
    return (
      <View >
      <FlatList 
      data={Users}
      renderItem={({item}) => <ChatListItem item={item} />}
      keyExtractor={item=>item.id}
      showsVerticalScrollIndicator={false}
      />
      <NewMessageButton/>
      </View>
    );
}

export default ChatStackScreen;