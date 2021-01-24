  
import React from 'react';
import { View, Text, Button, StyleSheet,Dimensions,TouchableOpacity,Platform, TextInput, StatusBar,Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import{AuthContext}from '../componemts/context';
import {useTheme} from '@react-navigation/native'
import Users from '../Model/user'



const SigninScreen = ({navigation}) => {

    const{colors}=useTheme()

    const[data,setData]=React.useState({
        username:'',
        password:'',
        check_textInpuChange:false,
        secureTextEntry:true,
        isValidUser:true,
        isValidpassword:true
    });

    const {signIn}=React.useContext(AuthContext);

    const textInputChange=(val)=>{
        if(val.trim().length >9){
            setData({
                ...data,
                username:val,
                check_textInpuChange:true,
                isValidUser:true,
            });
        }else{
            setData({
                ...data,
                username:val,
                check_textInpuChange:false,
                isValidUser:false
            }); 
        }
    }
    const HaldelPassword=(val)=>{
        if(val.trim().length >3){
            setData({
                ...data,
                password:val,
                isValidpassword:true,
            });
        }else{
            setData({
                ...data,
                password:val,
                isValidpassword:false,
            });   
        }
    }
    const UpdateSecureTextEntey=()=>{
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        })
    }
    const handleValiduser =(val)=>{
        if(val.trim().length > 9){
            setData({
                ...data,
                isValidUser:true
            });
        }else{
            setData({
                ...data,
                isValidUser:false
            });   
        }
    }
 {/*   const loginHandle=(userName,password)=>{
        const foundUser =Users.filter(item=>{
            return userName == item.username && password == item.password
        });

        if(foundUser.length = 0){
            Alert.alert('invalide user','Number or password maybe incorrect',[{text:'ok'}])
            return;
        }
        signIn(foundUser)
    }*/}
    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View style={[styles.footer,{backgroundColor:colors.background}]} animation="fadeInUpBig">
              <Text style={[styles.text_footer,{color:colors.text}]}> Number</Text>
              <View style={styles.action}>
                  <FontAwesome name="user-o" color={colors.text} size={20}/>
                  <TextInput 
                  placeholder="Enter Number"
                   style={[styles.textInput,{color:colors.text}]} 
                   keyboardType="numeric"
                   onChangeText={(val)=>textInputChange(val)}
                   onEndEditing={(e)=>handleValiduser(e.nativeEvent.text)}
                   />
                   {data.check_textInpuChange ?
                  <Feather name="check-circle" color="grey" size={15}/>:null}
              </View>
              {data.isValidUser ? null:
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                  <Text style={styles.errorMsg}>Number must be 10</Text>
              </Animatable.View>}
              <Text style={[styles.text_footer,{marginTop:15},{color:colors.text}]}> Password</Text>
              <View style={styles.action}>
                  <Feather name="lock" color={colors.text} size={20}/>
                  <TextInput 
                   placeholder="Your Password"
                   style={[styles.textInput,{color:colors.text}]} 
                   secureTextEntry={data.secureTextEntry ? true:false}
                   onChangeText={(val)=>HaldelPassword(val)}
                   />
                   <TouchableOpacity onPress={UpdateSecureTextEntey}>
                        {data.secureTextEntry ? 
                        <Feather name="eye-off" color="grey" size={20}/>:
                        <Feather name="eye" color="grey" size={20}/>}
                    </TouchableOpacity>
              </View>
              {data.isValidpassword ? null:
              <Animatable.View animation={'fadeInLeft'} duration={500}>
                  <Text style={styles.errorMsg}>password shoud be at lest 4 characters</Text>
              </Animatable.View>}
              <TouchableOpacity>
                  <Text style={{color:'#009387',marginTop:10}}>Forgot password</Text>
              </TouchableOpacity>
              <View style={styles.button}>
                  <TouchableOpacity style={styles.signIn} onPress={()=>{loginHandle(data.username,data.password)}}>
                  <LinearGradient colors={['#08d4c4','#01ab9d']} style={styles.signIn}>
                    <Text style={[styles.textSign,{color:'white'}]}>Sign In</Text>
                  </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                   onPress={()=> navigation.navigate('SignUpScreen')}
                   style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]
                   }>
                       <Text style={[styles.textSign,{color:'#009387'}]}>SignUp</Text>
                   </TouchableOpacity>
              </View>

          </Animatable.View>
      </View>
    );
};

export default SigninScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 12,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });