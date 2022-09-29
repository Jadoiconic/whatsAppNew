import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { Image, Text, TouchableOpacity, View, Alert } from "react-native";
import { chatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
    chatRoom: chatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation()
    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            user:user.name,
            img:user.imageUri,
        })
    }
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri:user.imageUri}} style={styles.avatar}/>
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChatListItem