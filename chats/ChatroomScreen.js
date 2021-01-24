import * as React from 'react';
import { View, Text,Image,FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Title } from 'react-native-paper';
import {MaterialCommunityIcons,Entypo,AntDesign,Ionicons,MaterialIcons} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native';
import{useRoute} from '@react-navigation/native';
import ChatInputBox from "./chatInputBox/index";
import ChatMessage from './chat Message/index'



const Stack = createStackNavigator();


const ChatroomStackScreen =({navigation})=>{
    const{colors}=useTheme()
    const route = useRoute();
    const theme =useTheme();
    return(
  <Stack.Navigator>
        <Stack.Screen name="Profile" component={ChatroomScreen} 
        options={()=>({
            title:route.params.name,
            headerTitleAlign:'left',
            headerTitleStyle:{
              marginLeft:90,
            },
            headerLeft:()=>(
              <View style={{marginLeft:15,flexDirection:'row', justifyContent: 'space-between', width: 60,}}>
                <MaterialCommunityIcons name="backburger" size={24} color={'#000000'}  onPress={()=>{navigation.goBack()}}/>
                <Image source={{uri:route.params.imageUri}} style={{width:35,height:35,borderRadius:20}}/>
                {/*<StatusBar barStyle= { theme.dark ?   "dark-content" :"light-content" } backgroundColor={ theme.dark ?  "white":"#333333" }/>*/} 
              </View>
            ),
            headerRight:()=>(
                <View style={{marginRight:15,flexDirection:'row', justifyContent: 'space-between', width: 100,}}>
                    <MaterialIcons name="videocam" size={24} color={'#000000'}/>
                    <MaterialIcons name="call" size={24} color={'#000000'}/>
                    <Entypo name="dots-three-vertical" size={22} color={'#000000'}/>
                </View>
            ),
            headerTitleStyle:{
              marginLeft:7,
              color:'#000000'
            },
            headerStyle:{
              backgroundColor:'#ffffff'
            }    
        })}/>
  </Stack.Navigator>
)};

 

const messages=[
	{
		id: 'm1',
		content: 'aytu madam',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm2',
		content: 'tv u',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Shella Madam',
		},
	}, {
		id: 'm3',
		content: 's urs sr',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Shella Madam',
		},
	}, {
		id: 'm4',
		content: "Yen madtaeeedira Q's",
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm5',
		content: 'tffn ayta Madam',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}, {
		id: 'm6',
		content: 'hello sr',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Shella Madam',
		},
	}, {
		id: 'm7',
		content: 'Hi Madam ',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vadim',
		},
	}
]


const ChatroomScreen=()=>{
	const{colors}=useTheme()
	 
    return(
        <View style={{width:'100%',height:'100%'}}>
			
          <FlatList
            data={messages}
            renderItem={({item})=><ChatMessage item={item}/>}
            keyExtractor={item=>item.id}
            inverted />
            <ChatInputBox/>
        </View>
    )
}

export default ChatroomStackScreen;