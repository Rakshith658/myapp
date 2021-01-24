import * as React from 'react';
import { View, Text, Button,StatusBar,StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import {AntDesign,FontAwesome} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container} from  '../Styles/Feedstyle'


import PostCard from '../componemts/PostCard'
import Story from '../componemts/story'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

const HomeStackScreen =({navigation})=>{
  const theme =useTheme();
  const{colors}=useTheme()
    
  return(
  <Stack.Navigator>
            
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title:"Let'schat",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontWeight:"bold",
            fontStyle:"italic"
          },
          headerLeft:()=>(
            <View style={{marginLeft:10 }}>
              <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" } backgroundColor={ theme.dark ? "#333333" : "white" }/>
              <AntDesign name="menuunfold" size={24} color={colors.text} onPress={()=>navigation.openDrawer()}/>
            </View>
          ),
          headerRight:()=>(
            <View style={{marginRight:15}}>
              <FontAwesome name="plus" size={24} color={colors.text} onPress={()=>navigation.navigate("Create")} />
            </View>
          )
        }} />
  </Stack.Navigator>)
}

const Posts = [
  {
    id: '1',
    userName: 'Rakshith',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: true,
    likes: '14',
    comments: '5',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '2',
    userName: 'Arjun',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: false,
    likes: '8',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '3',
    userName: 'Sheela',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: true,
    likes: '1',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '4',
    userName: 'Shashi',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,
    liked: true,
    likes: '22',
    comments: '4',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '5',
    userName: 'Suman',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: false,
    likes: '0',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '6',
    userName: 'Hima',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: false,
    likes: '0',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '7',
    userName: 'Swetha',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: false,
    likes: '0',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
  {
    id: '8',
    userName: 'Venki',
    userImgUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImgUri: 'none',
    liked: false,
    likes: '0',
    comments: '0',
    stautsImgUri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg' ,

  },
];


export function HomeScreen() {
  //const{colors}=useTheme()
  return (
    
    <View >
    <FlatList 
    style={{width:'100%',height:"17.9%"}}
    data={Posts}
    renderItem={({item}) => <Story item={item} />}
    keyExtractor={item=>item.id}
    showsVerticalScrollIndicator={false}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    //onPress={()=>{props.navigation.navigate('Setting')}}
    />
    <FlatList 
      data={Posts}
      renderItem={({item}) => <PostCard item={item} />}
      keyExtractor={item=>item.id}
      showsVerticalScrollIndicator={false}
      />
    </View>
    
  );
}

export default HomeStackScreen;