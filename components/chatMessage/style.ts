import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    user:{
        color: Colors.light.tint,
        fontWeight: 'bold'
    },
    message:{
        marginVertical:4,
    },
    time:{
        alignSelf: 'flex-end',
        color:'grey'
    },
    messageBox:{
        borderRadius:5,
        padding:10,
    },
})

export default styles;