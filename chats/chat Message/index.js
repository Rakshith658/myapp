import React from 'react';
import {Text, View} from 'react-native';
//import{ Message }from '../../types';

import styles from './styles';





const ChatMessage=({item}) => {
    
    const isMyMessage = () =>{
        return item.user.id==='u1';
    }
    return(
        <View style={styles.cantainer}>
            <View style={[styles.messageBox,{
            backgroundColor:isMyMessage()?'#ffffff':'#333333',
            marginLeft:isMyMessage()?50:0,
            marginRight:isMyMessage()?0:50,
        }]}>
            {!isMyMessage() && <Text style={styles.name}>{item.user.name}</Text>}
            <Text style={{color:isMyMessage()?'#333333':'#ffffff'}}>{item.content}</Text>
            {/*<Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>*/}
            </View>   
        </View>
   
    )
}
export default ChatMessage;
