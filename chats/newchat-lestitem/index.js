//import moment from "moment";
import React from "react";
import {
     Image, 
     Text, 
     View, 
     TouchableWithoutFeedback 
    } from "react-native";
//import { ChatRoom } from "../../types";
import stylesss from "./style";
import{ useNavigation} from "@react-navigation/native";
import {useTheme} from '@react-navigation/native'


const NewChatListItem=({item}) => {
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
        <View style={stylesss.cantainer}>
            <View style={stylesss.leftcantainer}>

                <Image source={{uri:item.imageUri}} style={stylesss.avatar}/>

                <View style={stylesss.midcantainer}>   

                    <Text style={[stylesss.username,{color:colors.text}]}>{item.name}</Text>
                    {/*<Text numberOfLines={2} style={stylesss.lastMessage}>{item.content}</Text>*/}

                </View>
            </View> 

           {/* <Text >
                {(chatRoom.lastMessage.createdAt)}
            </Text>*/}
        </View>
    </TouchableWithoutFeedback>
    
    )
};
export default NewChatListItem;