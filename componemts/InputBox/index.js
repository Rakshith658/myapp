import React, { useState } from 'react';
import { Text, TextInput, View ,SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';

import { SimpleLineIcons,FontAwesome5,Entypo,Feather } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';


const InputBox = () =>{

    const[message,setMessage]=useState('');

    const onMicrophonePress = () =>{
        console.warn('Microphone')
    }

    const onSendpress = () =>{
        console.warn(` Sending ${message}`)

        // send the message to backend
        
        setMessage('')
    }


     const onpress = () =>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendpress();
        }
    }

    return(
        <View style={styles.cantainer}>
            <View style={styles.maincantainer}>
                <FontAwesome5 name="smile-wink" size={24} color="grey" />
               
                        <TextInput
                        placeholder="Type a message" 
                        style={styles.textInput}
                        multiline
                        scrollEnabled
                        value={message}
                        onChangeText={setMessage}
                        />
                   
                
                
                {!message && <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>}
            <TouchableOpacity >
                {!message && <Feather name="camera" size={24} color="grey" style={styles.icon} />}
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={ onpress }>
                <View style={styles.buttonCantainer}>
                    { !message
                    ?<SimpleLineIcons name="microphone" size={24} color='#000000' />
                    :<Feather name="send" size={24} color='#000000' />
                    }
                </View>
            </TouchableOpacity>
           
        </View>
    );
}

export default InputBox;