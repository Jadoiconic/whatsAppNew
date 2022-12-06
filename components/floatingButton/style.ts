import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.light.tint,
        width:50,
        height:50,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        position:'absolute',
        bottom:20,
        right:10,
    },
})

export default styles
