import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
    },
    btn:{
        backgroundColor:'#128755',
        borderRadius:100,
        padding:10,
    },
    input:{
        flex:1,
        minHeight:40,
        maxHeight:100,
        marginHorizontal:10,
    },
    icon:{
        marginHorizontal:3,
    },
    mainContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
        alignItems:'center',
        borderRadius:50,
        marginRight:5,
        flex:1,

    }
})

export default styles