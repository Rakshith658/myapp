import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from 'react';
import { View, Text, ActivityIndicator,StatusBar } from 'react-native';
import { NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import {DrawerContent} from './Screens/Drawerd'
import {Provider ,
  DarkTheme ,
  DefaultTheme as PaperDefaultTheme
} from "react-native-paper"

import MaintabScreen from './Screens/MaintabScreen'
import {useTheme} from '@react-navigation/native'

import ProfileStackScreen from './Screens/ProfileScreen';
import CallsStackScreen from './Screens/CallsScreen';
import ContactsStackScreen from './chats/ContactsScreen';
import SettingStackScreen from './Screens/SettingScreen';
import CreateStackScreen from './Screens/Create'
import StautsStackScreen from './Screens/stauts'
import ChatroomStackScreen from './chats/ChatroomScreen';
import TicTacToeStackScreen from './games/Tic-Tac-Toe/TicTacToe'

import{AuthContext} from './componemts/context';
import AsyncStorage from '@react-native-community/async-storage'

import RootStackScreen from './ScreensR/RootStackScreen'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function App() {
  //const[isLodaing,setIsLoding]=React.useState(true);
  //const[userToken,setUsertoken]=React.useState(null);
  const [isDarkTheme,setIsDarkTheme]=React.useState(false)

  

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      barStyle:'dark-content'
    }
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...DarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...DarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      barStyle:'light-content'
    }
  }
  
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext=React.useMemo(()=>({
    signIn:async(foundUser)=>{
      //setUsertoken('fgkj');
      //setIsLoding(false);
      const userToken= String(foundUser[0].userToken);
      const userName=foundUser[0].username;
      //if(userName=="8495968989"&&password =="pass"){        
        try{
          userToken="dfgdfg"
          await AsyncStorage.setItem('userToken', userToken);
        }catch(e){
          console.log(e);
        }
      //}
      dispatch({type:'LOGIN',id:userName,token:userToken})
    }, 
    signOut:async()=>{
      //setUsertoken(null);
      //setIsLoding(false)
      try{
        await AsyncStorage.removeItem('userToken'
        );
      }catch(e){
        console.log(e);
      }
      dispatch({type:'LOGOUT'})
    },
    signUp:()=>{
      setUsertoken('fgkj');
      setIsLoding(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }),[]);

  React.useEffect(()=>{
    setTimeout(async()=>{
      //setIsLoding(false),
      let userToken;
      userToken=null;
      try{
        userToken=await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }   
      dispatch({type:"REGISTER",token:'dfklj'})
    },1000);
  },[])

  if(loginState.isLodaing){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }

  return (
    <Provider theme={theme}>
    <AuthContext.Provider value={authContext} >
    <NavigationContainer theme={theme} >
      { loginState.userToken !=null ? 
              <Drawer.Navigator drawerContent = { props => <DrawerContent {...props}/>}>        
              <Stack.Screen name="Home" component={MaintabScreen} />
              <Stack.Screen name="Profile" component={ProfileStackScreen} />
              <Stack.Screen name="Calls" component={CallsStackScreen} />
              <Stack.Screen name="Contacts" component={ContactsStackScreen} />
              <Stack.Screen name="Create" component={CreateStackScreen} />
              <Stack.Screen name="Setting" component={SettingStackScreen} />
              <Stack.Screen name="Stauts" component={StautsStackScreen} />
              <Stack.Screen name="Chatroom" component={ChatroomStackScreen} />
              <Stack.Screen name="TicTacToe" component={TicTacToeStackScreen} />
            </Drawer.Navigator>
            :<RootStackScreen/>}
            
    </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
  );
}

export default App;
