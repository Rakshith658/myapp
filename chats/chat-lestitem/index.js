//import moment from "moment";
import React from "react";
import {
     Image, 
     Text, 
     View, 
     TouchableWithoutFeedback 
    } from "react-native";
//import { ChatRoom } from "../../types";
import styles from "./style";
import{ useNavigation} from "@react-navigation/native";
import {useTheme} from '@react-navigation/native'


const ChatListItem=({item}) => {
    const{colors}=useTheme();


    const navigation = useNavigation();
    const onClick = () =>{
        navigation.navigate('Chatroom',{
            name:item.name,
            imageUri:item.imageUri,
        })
    }

    

    return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.cantainer}>
            <View style={styles.leftcantainer}>

                <Image source={{uri:item.imageUri}} style={styles.avatar}/>

                <View style={styles.midcantainer}>   

                    <Text style={[styles.username,{color:colors.text}]}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.lastMessage}>{item.content}</Text>

                </View>
            </View> 

           {/* <Text >
                {(chatRoom.lastMessage.createdAt)}
            </Text>*/}
        </View>
    </TouchableWithoutFeedback>
    
    )
};
export default ChatListItem;