import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

const FloatButton = () => {

    const navigation = useNavigation()
    const oneNewChat = ()=>{
        navigation.navigate('Contact')
    }
  return (
      
      <View style={styles.container}>
        <TouchableOpacity onPress={oneNewChat}>
            <MaterialCommunityIcons
                name='message-reply-text'
                size={28}
                color="white"
                
            />
        </TouchableOpacity>
    </View>

  )
}

export default FloatButton