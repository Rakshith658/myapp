import React from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const Story=({item})=>{
    const navigation =useNavigation();

    const onPress= () =>{
        navigation.navigate('Stauts',{
            name:item.userName,
            imageUri:item.userImgUri,
            stautsUri:item.stautsImgUri
        })
    }
    return(
        <View>
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri:item.userImgUri}}
               style={styles.image}/>    
        </View>
            <View style={{alignItems:'center',marginTop:0}}>
           <Text style={styles.name} numberOfLines={1}>{item.userName}</Text>
            </View>
        </TouchableOpacity> 
        </View>
        
        
    ///*<UserImg source={{uri:item.userImgUri}} />*/
    );
}
export default Story;


const styles = StyleSheet.create({
    container:{
        width:66,
        height:66,
        margin:5,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#333333',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:0
    },
    image:{
        width:60,
        height:60,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#ffffff",
    },
    name:{
        marginVertical:5,
        
    }
})