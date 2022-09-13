/* eslint-disable react-native/no-inline-styles */
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNAvigator = () => {

    const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style={{
            paddingTop: top,
        }}
        sceneContainerStyle={{
            backgroundColor:'white',
        }}
        screenOptions={({route}) =>({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
                backgroundColor: colores.primary,
            },
            tabBarStyle:{
                borderTopColor:colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarIcon: ({color})=>{
                let iconName: string = '';
                switch (route.name) {
                  case 'Chat':
                    iconName = 'chatbubbles-outline';
                    break;
                  case 'Contact':
                    iconName = 'mail-outline';
                    break;
                  case 'Albums':
                    iconName = 'image-outline';
                    break;
                }
                return <Text style={{color}}><Icon name={iconName} size={25}/></Text>;
              },
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}