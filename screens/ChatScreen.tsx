import { FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import ChatListItem from '../components/chatList';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRooms from '../constants/data/ChatRooms';
import FloatButton from '../components/floatingButton';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
      <FlatList
       data={ChatRooms}
       renderItem={({ item })=><ChatListItem chatRoom={item} />}
       keyExtractor={(item)=> item.id} 
       />

        <FloatButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
