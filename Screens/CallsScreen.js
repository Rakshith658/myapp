import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native'



const Stack = createStackNavigator();



const CallsStackScreen =({navigation})=>{
    const{colors}=useTheme()
    return(
  <Stack.Navigator>
        <Stack.Screen name="Calls" component={CallsScreen}
               options={{
                headerLeft:()=>(
                    <View style={{marginLeft:15}}>
                    <MaterialCommunityIcons name="backburger" size={24} color={colors.text}  onPress={()=>{navigation.goBack()}}/>
                    </View>
                ),
            }} />
  </Stack.Navigator>
)};


const CallsScreen=()=>{
    const{colors}=useTheme()
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:colors.text}}>Calls Screen</Text>
        </View>
    )
}

export default CallsStackScreen;