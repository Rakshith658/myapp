import * as React from 'react';
import { View, Text,FlatList  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native'
import NewChatListItem from './newchat-lestitem'



const Stack = createStackNavigator();


const ContactsStackScreen =({navigation})=>{
    const{colors}=useTheme()
    return(
  <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactsScreen}
               options={{
                headerLeft:()=>(
                    <View style={{marginLeft:15}}>
                        <MaterialCommunityIcons name="backburger" size={24} color={colors.text}onPress={()=>{navigation.goBack()}} />
                    </View>
                ),
            }} />
  </Stack.Navigator>)
}


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

const ContactsScreen=()=>{
    const{colors}=useTheme()
    return(
        <View >
            <FlatList 
             data={Users}
            renderItem={({item}) => <NewChatListItem item={item} />}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ContactsStackScreen;