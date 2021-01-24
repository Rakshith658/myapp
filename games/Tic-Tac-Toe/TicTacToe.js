import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native'



const Stack = createStackNavigator();


const TicTacToeStackScreen =({navigation})=>{
    const{colors}=useTheme()
    return(
  <Stack.Navigator>
        <Stack.Screen name="Tic-tac-toe" component={TicTacToeScreen}
               options={{
                   title:'Tic-tac-toe',
                   headerTitleAlign:'center',
                headerLeft:()=>(
                    <View style={{marginLeft:15}}>
                    <MaterialCommunityIcons name="backburger" size={24} color={colors.text}  onPress={()=>{navigation.goBack()}}/>
                    </View>
                ),
            }} />
  </Stack.Navigator>
)};


const  TicTacToeScreen=()=>{ 
    
    const{colors}=useTheme()
    

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:colors.text}}>Tic-tac-toe Screnn</Text>
        </View>
    )
    
}

export default TicTacToeStackScreen;