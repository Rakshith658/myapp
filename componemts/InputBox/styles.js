import{ StyleSheet }from 'react-native';
import  Constants from 'expo-constants';


const styles=StyleSheet.create({
    cantainer:{
        flexDirection:"row",
        margin:10,
        alignItems:'center',
    },
    maincantainer:{
        flexDirection:"row",
        backgroundColor:'white',
        padding:10,   
        borderRadius:50,
        marginRight:10,
        flex:1,
        alignItems:'center',
        borderWidth:2
    },
    textInput:{
        flex:1,
        marginHorizontal:10,
        height: 30,
    },
    icon:{
        marginHorizontal:5,
    },
    buttonCantainer:{
        backgroundColor:'white',
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2
    },
   
    
})

export default styles;