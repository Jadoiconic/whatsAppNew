import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Camera: {
            screens: {
              CameraScreen: 'Camera',
            },
          },
          Chats: {
            screens: {
              ChatScreen: 'Chats',
            },
          },
          Status: {
            screens: {
              StatusScreen: 'Status',
            },
          },
          Calls: {
            screens: {
              CallScreen: 'Calls',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
