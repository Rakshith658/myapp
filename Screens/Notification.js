import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


const NotificationStackScreen =()=>(
  <Stack.Navigator>
        <Stack.Screen name="Notifiction" component={NotificationScreen} />
  </Stack.Navigator>
);

function NotificationScreen() {


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notifiction Screen</Text>
      </View>
    );
}

export default NotificationStackScreen;