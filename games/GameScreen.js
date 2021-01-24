import * as React from 'react';
import { View, Text, Button, Image,StyleSheet, TouchableOpacity, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();


const GameStackScreen =()=>(
  <Stack.Navigator>
        <Stack.Screen name="Game" component={GameScreen} />
  </Stack.Navigator>
);



function GameScreen() {
    
  const navigation =useNavigation();

    const onPress= () =>{
        navigation.navigate('TicTacToe')
    }

    return (
      <View>
        <View style={styles.gamescore}>
          <Text style={styles.gametext}>Points:12435</Text>
        </View>
      <View style={{flexDirection:'row'}}>
        <View style={styles.clm}>
          <TouchableOpacity onPress={onPress}>
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg'}}
              style={styles.image}
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={styles.text}> Tic-Tac-Toe</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg'}}
              style={styles.image}
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={styles.text}>Chess</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.clm}>
          <TouchableOpacity>
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg'}}
              style={styles.image}
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={styles.text}>Chess</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{alignItems:'center'}}>
              <Image
              source={{uri:'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg'}}
              style={styles.image}
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Text style={styles.text}>Chess</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
}

export default GameStackScreen;

const styles = StyleSheet.create({
  image:{
    width:140,
    height:140,
    borderWidth:2,
    borderColor:'#333333',
    borderRadius:15
  },
  text:{
    fontStyle:'italic',
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20,
    fontSize:20
  },
  clm:{
    marginLeft:30,
    marginTop:30,
    flexDirection:'column'
  },
  gamescore:{
    alignItems:'center',
    //marginTop:20,
    backgroundColor:"#333"
  },
  gametext:{
    fontSize:35,
    fontWeight:"bold",
    fontStyle:"italic",
    color:'#ffffff'
  }
})