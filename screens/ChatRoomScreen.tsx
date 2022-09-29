import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ChatRoomScreen = () => {
  const route = useRoute()
  // console.warn(route.params)
  return (
    <View>
      <Text>ChatRoomScreen { route.name}</Text>
    </View>
  )
}

export default ChatRoomScreen