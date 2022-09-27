import React from "react";
import { Image, Text, View } from "react-native";
import { chatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: chatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri:user.imageUri}} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>Yesterday</Text>
            {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
        </View>
    )
}

export default ChatListItem