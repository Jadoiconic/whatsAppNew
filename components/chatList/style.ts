import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
    },
    leftContainer:{
        flexDirection:'row',
    },
    avatar:{
        width:60,
        height:60,
        marginRight:10,
        borderRadius:100,
    },
    username:{
        fontWeight:'bold',
    },
    lastMessage:{
        fontSize:16,
        color:'grey',
        maxWidth:220,
        // backgroundColor:'#128755',
    },
    midContainer:{
        justifyContent:'space-around',
    },
    time:{
        fontSize:16,
        color:'grey',
        position:'relative',
        zIndex:1,

    },
});

export default styles;