import { View, Text } from 'react-native'
import React from 'react'
import { Message } from '../../types'
import styles from './style'
import moment from 'moment';
import Colors from '../../constants/Colors';

export type chatMessageProps = {
    message: Message;
}

const ChatMessage = (props: chatMessageProps) => {
    const { message } = props;
    const isMyMessage = () => {
      return message.user.id === 'u1'
    }
  return (
    <View style={styles.container}>
      <View style={[styles.messageBox,{
        backgroundColor:isMyMessage()? "#DCF8C5":"white",
        marginRight:isMyMessage() ? 0: 50,
        marginLeft:isMyMessage()? 50: 0,
        }]}>
        {!isMyMessage() && <Text style={styles.user}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default ChatMessage