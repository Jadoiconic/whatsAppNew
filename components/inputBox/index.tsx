import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo, Feather, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const InputComp = () => {
  const [message,setMessage] = React.useState('')
  const sendMessage = () => {
    console.warn("Send Message")
  }
  const openCamera = () => {
    console.warn("Open camera media")
  }

  const recordVoiceNote = () => {
    console.warn("Open camera media")
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name='laugh-beam' size={24} color='grey'/>
        <TextInput 
          style={styles.input} 
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Entypo name="attachment" size={22} color='grey' style={styles.icon} />
        {!message &&
        <TouchableOpacity onPress={openCamera}>
          <Fontisto name="camera" size={22} color='grey' style={styles.icon} />
          </TouchableOpacity>}
      </View>
      <View style={styles.btn}>
        {!message?
          <TouchableOpacity onPress={recordVoiceNote}>
            <MaterialCommunityIcons name='microphone' size={24} color='#fff'/>
          </TouchableOpacity>:
          <TouchableOpacity onPress={sendMessage}>
            <MaterialCommunityIcons name='send' size={24} color='#fff'/>
          </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default InputComp