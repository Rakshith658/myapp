import{StyleSheet} from 'react-native';




const stylesss=StyleSheet.create({
    
    cantainer:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding:10,
    },
    leftcantainer:{
        flexDirection:"row",
    },
    midcantainer:{
        justifyContent:"space-around"
    },
    avatar: {
       width:50,
       height:50,
       borderRadius:20,
        marginRight:15,
    },
    username:{
        fontWeight:'bold',
        fontSize:17,
        
    },
    lastMessage:{
        fontSize:16,
        color:'grey'
    }, 
    time:{
        fontSize:16,
        color:'grey'
    } 
});
export default stylesss;