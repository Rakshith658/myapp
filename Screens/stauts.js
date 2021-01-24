import * as React from 'react';
import { View, Text, Button, Image,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import{useRoute} from '@react-navigation/native'
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native'
import InputBox from '../componemts/InputBox';
import {StyleSheet, Dimensions} from 'react-native';

const Stack = createStackNavigator();

const StautsStackScreen =({navigation})=>{
  const{colors}=useTheme()
  const route = useRoute();
  const theme =useTheme();
   return(
        <Stack.Navigator>
            <Stack.Screen name="stauts" component={StautsScreen} options={()=>({
                title:route.params.name,
                headerTitleAlign:'left',
                headerTitleStyle:{
                  marginLeft:90,
                },
                headerLeft:()=>(
                  <View style={{marginLeft:15,flexDirection:'row', justifyContent: 'space-between', width: 60,}}>
                    <MaterialCommunityIcons name="backburger" size={24} color={'#ffffff'}  onPress={()=>{navigation.goBack()}}/>
                    <Image source={{uri:route.params.imageUri}} style={{width:35,height:35,borderRadius:20}}/>
                    {/*<StatusBar barStyle= { theme.dark ?   "dark-content" :"light-content" } backgroundColor={ theme.dark ?  "white":"#333333" }/>*/} 
                  </View>
                ),
                headerTitleStyle:{
                  marginLeft:7,
                  color:'#ffffff'
                },
                headerStyle:{
                  backgroundColor:'#000000'
                }    
            })}/>
        </Stack.Navigator>
    )
};

function StautsScreen() {
  const route = useRoute();
    return (
      <View style={{backgroundColor:'#333333'}} >
       <View style={styles.container}>
        <Image
        source={{uri:'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg'}} 
        style={styles.video}
        resizeMode={'cover'}
        /> 
       </View>
      <View style={{position:'relative'}}  >
        <InputBox/>
      </View>
      </View>
    );
}

export default StautsStackScreen;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'88%',
  },
  videPlayButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },

  //  right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },

  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
