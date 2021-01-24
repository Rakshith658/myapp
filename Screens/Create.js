import  React, { useState, useEffect }  from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Title } from 'react-native-paper';
import {MaterialCommunityIcons,FontAwesome,Foundation,Feather} from 'react-native-vector-icons';
import {useTheme} from '@react-navigation/native';
import { InputField, InputWrapper } from '../Styles/Addpost'
import { FloatingAction } from "react-native-floating-action";
//import ImagePicker from 'react-native-image-crop-picker';
import { Camera } from 'expo-camera';



const Stack = createStackNavigator();


const CreateStackScreen =({navigation})=>{
    const{colors}=useTheme()
    return(
  <Stack.Navigator>
        <Stack.Screen name="Create" component={CreateScreen} 
        options={{
            headerLeft:()=>(
                <View style={{marginLeft:15}}>
                    <MaterialCommunityIcons name="backburger" size={24} color={colors.text} onPress={()=>{navigation.goBack()}} />
                </View>
            ),
            headerRight:()=>(
                <View style={{marginRight:15}}>
                    <FontAwesome name="share-square-o" size={24} color={colors.text} />
                </View>
            ),
        }}/>
  </Stack.Navigator>
)};


const CreateScreen=()=>{
    const{colors}=useTheme()

    {/*const takephoto = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
    }

    const choosephoto =()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }*/}
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    const actions = [
        {
          text: "Camera",
          icon: <Feather name="camera" size={30} color="white"    />,
          name: "bt_accessibility",
          position: 2,
        
          
        },
        {
          text: "Photo",
          icon: <Foundation name="photo" size={24} color="white" onPress={()=>{}}/>,
          name: "bt_language",
          position: 1
        }
      ];
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <InputWrapper>
              <InputField
                placeholder="What's on your mind?"
                multiline
                numberOfLines={4}
              />
                <FloatingAction
                actions={actions}
                onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                />
            </InputWrapper>
        </View>
    )
}

export default CreateStackScreen;