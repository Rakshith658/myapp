import * as React from 'react';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {Feather,Ionicons,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons,AntDesign,FontAwesome} from 'react-native-vector-icons';

import {AuthContext} from '../componemts/context'

export function DrawerContent(props){

  const paperTheme =useTheme();

  const {signOut,toggleTheme}=React.useContext(AuthContext);

  {/*const toggleTheme=()=>{
    setIsDarkTheme(!isDarkTheme)
  }*/}
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                          <Avatar.Image
                          source={{uri:'https://images.app.goo.gl/tQY8qrgeD9FsKMUp7'}}
                          size={50}
                          />
                          <View style={{marginLeft:15,flexDirection:"column"}}>
                            <Title style={styles.title}>Rakshith Kumar S</Title>
                            <Caption style={styles.caption}>8495968989</Caption>
                          </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                      icon={({color,size})=>(<MaterialIcons name="person-outline" size={size} color={color} marginLeft={15}/>)}
                      label="Profile"
                      onPress={()=>{props.navigation.navigate('Profile')}}
                      />
                      <DrawerItem 
                      icon={({color,size})=>(<Feather name="phone-call" size={size} color={color} marginLeft={15} />)}
                      label="Calls"
                      onPress={()=>{props.navigation.navigate('Calls')}}
                      />
                      <DrawerItem 
                      icon={({color,size})=>(<AntDesign name="contacts" size={size} color={color} marginLeft={15} />)}
                      label="Contacts"
                      onPress={()=>{props.navigation.navigate('Contacts')}}
                      />
                      <DrawerItem 
                      icon={({color,size})=>(<FontAwesome name="plus" size={size} color={color} marginLeft={15}/>)}
                      label="Create"
                      onPress={()=>{props.navigation.navigate('Create')}}
                      />
                       <DrawerItem 
                      icon={({color,size})=>(<AntDesign name="setting" size={size} color={color} marginLeft={15}/>)}
                      label="Setting"
                      onPress={()=>{props.navigation.navigate('Setting')}}
                      />
                      <DrawerItem 
                      icon={({color,size})=>(<MaterialIcons name="person-add" size={size} color={color} marginLeft={15} />)}
                      label="Invite Friends"
                      />
                      
                    </Drawer.Section>
                    <Drawer.Section title="Preferencess">
                      <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.preference}>
                          <Text>Dark Theme</Text>
                          <View pointerEvents="none">
                            <Switch value={paperTheme.dark}/>
                          </View>
                        </View>
                      </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <AntDesign 
                        name="login" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop:15,
      
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});