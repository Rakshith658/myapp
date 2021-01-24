import React from 'react';
import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const NewMessageButton = () =>{

    const navigation =useNavigation();

    const onPress= () =>{
        navigation.navigate('Contacts')
    }

    return(
        
         <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name="md-person-add" size={24} color='#333333' />
             </TouchableOpacity>
         </View>
        
        
    )
}

export default NewMessageButton;