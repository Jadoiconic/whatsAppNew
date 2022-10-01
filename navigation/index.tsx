/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, Feather, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, ColorSchemeName, Image,View,Text, Touchable, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatScreen from '../screens/ChatScreen';
import CameraScreen from '../screens/CameraScreen';
import CallScreen from '../screens/CallScreen';
import StatusScreen from '../screens/StatusScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [moon,setMoon] = React.useState(true);
  const [offline,setOffline] = React.useState(false)
  const navigation = useNavigation()
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.light.tint,
        // elevetion:0,
        // shadowOpacity:0,
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
          <TouchableOpacity onPress={()=>setOffline(!offline)}>
            <MaterialIcons name={offline === true? "wifi-off":"wifi"} size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setMoon(!moon)}>
            <Entypo name={moon === false? "light-up":"moon"} size={24} color="white" />
          </TouchableOpacity>
          <Feather name="search" size={24} color="white" />
          <Feather name="more-vertical" size={24} color="white" />
        </View>
      ),}} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ route })=>({ 
        title: route.params.user,
        headerRight:()=>(
        <View style={{flexDirection:'row',width:90,justifyContent:'space-between'}}>
          <Feather name='video' size={22} color={Colors.light.background}/>
          <Feather name='phone' size={22} color={Colors.light.background}/>
          <Feather name='more-vertical' size={22} color={Colors.light.background}/>
        </View>
        ) ,
        headerLeft:()=>(
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <View style={{padding:0,marginRight:5,marginLeft:-5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <FontAwesome5 name="arrow-left" size={20} color={Colors.light.background}/>
              <Image source={{uri:route.params.img}} style={{width:40,height:40,borderRadius:100,backgroundColor:'red'}}/>
            </View>
          </TouchableOpacity>
        ),
        })}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}


const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator 
      initialRouteName='Chats'
      screenOptions={{
        tabBarActiveTintColor:Colors.light.background,
        tabBarStyle:{backgroundColor:Colors.light.tint,},
        tabBarIndicatorStyle:{backgroundColor:Colors.light.background,height:4,},
        tabBarLabelStyle:{fontWeight:'bold',},
        }}>
        <TopTab.Screen name="Camera" component={ CameraScreen } options={{tabBarIcon:()=><Feather name='camera' size={22} color={Colors.light.background}/>,
          tabBarLabel:()=>null}}/>
        <TopTab.Screen name="Chats" component={ ChatScreen }/>
        <TopTab.Screen name="Status" component={ StatusScreen }/>
        <TopTab.Screen name="Calls" component={ CallScreen }/>
    </TopTab.Navigator>
  );
}


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
