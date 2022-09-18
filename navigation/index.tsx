/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, ColorSchemeName, Pressable,View,Text, Touchable, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/CameraScreen';
import TabTwoScreen from '../screens/StatusScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatScreen from '../screens/ChatScreen';
import CameraScreen from '../screens/CameraScreen';
import CallScreen from '../screens/CallScreen';
import StatusScreen from '../screens/StatusScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [moon,setMoon] = React.useState(true);
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.light.tint,
      },
      headerTintColor:Colors.light.background,
      headerTitleAlign:'left',
      headerTitleStyle:{
        fontWeight:'bold',
      },
      
      }}>
      <Stack.Screen name="Root" component={TopTabNavigator} 
      options={{title:"WhatsApp",headerRight: () => (
        <View style={{flexDirection:'row',width:140,justifyContent:'space-between'}}>
          <FontAwesome name="wifi" size={24} color="white" />
          <TouchableOpacity onPress={()=>setMoon(!moon)}>
            <Entypo name={moon === false? "light-up":"moon"} size={24} color="white" />
          </TouchableOpacity>
          <Feather name="search" size={24} color="white" />
          <Feather name="more-vertical" size={24} color="white" />
        </View>
      ),}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator 
      initialRouteName='Chats'
      tabBarOptions={{
        activeTintColor: Colors.light.background,
        style:{background: Colors.light.tint},
        indicatorStyle:{backgroundColor: Colors.light.background,
        height:5,}
      }}>
        <TopTab.Screen name="Camera" component={ CameraScreen } options={{tabBarIcon:()=><Feather name='camera' size={22} color='white'/>,
      tabBarLabel:''}}/>
        <TopTab.Screen name="Chats" component={ ChatScreen }/>
        <TopTab.Screen name="Status" component={ StatusScreen }/>
        <TopTab.Screen name="Calls" component={ CallScreen }/>
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
