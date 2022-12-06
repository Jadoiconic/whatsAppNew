import { View, Text, FlatList,ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ChatMessage from '../components/chatMessage'
import ChatRoomsData from '../constants/data/Chats'
import InputComp from '../components/inputBox'

const ChatRoomScreen = () => {
  const route = useRoute()
  // console.warn(route.params)
  return (
    <ImageBackground 
      source={require("../assets/images/chatbg.png")}
      resizeMode="cover"
      style={{width:'100%',height:'100%'}}
      >
        <FlatList 
        data={ChatRoomsData.messages} 
        renderItem={({item})=> (<ChatMessage message={item}/>)}
        inverted
        />
        <InputComp />
    </ImageBackground>
  )
}

export default ChatRoomScreen