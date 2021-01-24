  
import React from 'react';
import { View, Text, Button, StyleSheet,Dimensions,TouchableOpacity,Platform, TextInput, StatusBar } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native'


const SigninScreen = ({navigation}) => {

    const{colors}=useTheme()

    const[data,setData]=React.useState({
        number:'',
        password:'',
        Confirmpassword:'',
        check_textInpuChange:false,
        secureTextEntry:true,
        CsecureTextEntry:true
    });
    const textInputChange=(val)=>{
        if(val.length !=0){
            setData({
                ...data,
                number:val,
                check_textInpuChange:true
            });
        }else{
            setData({
                ...data,
                number:val,
                check_textInpuChange:false
            }); 
        }
    }
    const HaldelConfirmPassword=(val)=>{
        setData({
            ...data,
            Confirmpassword:val,
        });
    }
    const UpdateConfirmSecureTextEntey=()=>{
        setData({
            ...data,
            CsecureTextEntry:!data.CsecureTextEntry
        })
    }
    const HaldelPassword=(val)=>{
      setData({
          ...data,
          password:val,
      });
  }
  const UpdateSecureTextEntey=()=>{
      setData({
          ...data,
          secureTextEntry:!data.secureTextEntry
      })
  }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Register Now!</Text>
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
                   />
                   {data.check_textInpuChange ?
                  <Feather name="check-circle" color="grey" size={15}/>:null}
              </View>
              <Text style={[styles.text_footer,{marginTop:15},,{color:colors.text}]}> Password</Text>
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
              <Text style={[styles.text_footer,{marginTop:15},{color:colors.text}]}>Confirm Password</Text>
              <View style={styles.action}>
                  <Feather name="lock" color={colors.text} size={20}/>
                  <TextInput 
                   placeholder="Confirm Password"
                   style={[styles.textInput,,{color:colors.text}]} 
                   secureTextEntry={data.CsecureTextEntry ? true:false}
                   onChangeText={(val)=>HaldelConfirmPassword(val)}
                   />
                   <TouchableOpacity onPress={UpdateConfirmSecureTextEntey}>
                        {data.CsecureTextEntry ? 
                        <Feather name="eye-off" color="grey" size={20}/>:
                        <Feather name="eye" color="grey" size={20}/>}
                    </TouchableOpacity>
              </View>
              <View style={styles.button}>
                  <LinearGradient colors={['#08d4c4','#01ab9d']} style={styles.signIn}>
                    <Text style={[styles.textSign,{color:'white'}]}>Sign Up</Text>
                  </LinearGradient>
                  <TouchableOpacity
                   onPress={()=> navigation.goBack()}
                   style={[styles.signIn,{borderColor:'#009387',borderWidth:1,marginTop:15}]
                   }>
                       <Text style={[styles.textSign,{color:'#009387'}]}>Sign In</Text>
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
        fontSize: 14,
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