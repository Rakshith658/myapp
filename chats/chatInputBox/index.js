import React, { useState } from 'react';
import { Text, TextInput, View ,SafeAreaView, TouchableOpacity} from 'react-native';
import styless from './styles';

import { SimpleLineIcons,FontAwesome5,Entypo,Feather } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';


const ChatInputBox = () =>{

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
        <View style={styless.cantainer}>
            <View style={styless.maincantainer}>
                <FontAwesome5 name="smile-wink" size={24} color="grey" />
               
                        <TextInput
                        placeholder="Type a message" 
                        style={styless.textInput}
                        multiline
                        scrollEnabled
                        value={message}
                        onChangeText={setMessage}
                        />
                   
                
                
                {!message && <Entypo name="attachment" size={24} color="grey" style={styless.icon}/>}
            <TouchableOpacity >
                {!message && <Feather name="camera" size={24} color="grey" style={styless.icon} />}
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={ onpress }>
                <View style={styless.buttonCantainer}>
                    { !message
                    ?<SimpleLineIcons name="microphone" size={24} color='#000000' />
                    :<Feather name="send" size={24} color='#000000' />
                    }
                </View>
            </TouchableOpacity>
           
        </View>
    );
}

export default ChatInputBox;