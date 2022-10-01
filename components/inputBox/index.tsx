import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo, Feather, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const InputComp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
        <TextInput style={styles.input} multiline/>
        <Entypo name="attachment" size={22} color='grey' style={styles.icon} />
        <Fontisto name="camera" size={22} color='grey' style={styles.icon} />
      </View>
      <View style={styles.btn}>
        <MaterialCommunityIcons name='microphone' size={24} color='#fff'/>
      </View>
    </View>
  )
}

export default InputComp