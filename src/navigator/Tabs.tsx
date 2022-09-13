/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabsNAvigator } from './TopTabsNavigator';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const Tabs = ()=>{

  return Platform.OS === 'ios'
  ? <TabsIOS />
  : <TabsAndroid />;
}





const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor:'white',
        }}
        screenOptions={ ({route}) =>({
          tabBarActiveTintColor: colores.primary,
          tabBarStyle:{
              borderTopColor:colores.primary,
              borderTopWidth: 0,
              elevation: 0,
          },
          tabBarLabelStyle:{
            fontSize:15,
          },
          tabBarIcon: ({color,focused,size})=>{
            let iconName: string = '';
            switch (route.name) {
              case 'Tab1Screen':
                iconName = 'apps-outline';
                break;
              case 'Tab2Screen':
                iconName = 'layers-outline';
                break;
              case 'StackNavigator':
                iconName = 'happy-outline';
                break;
            }
            return <Text style={{color}}><Icon name={iconName} size={20}/></Text>;
          },
        })
      }
    >
      {/* <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabsNAvigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={ ({route}) =>({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
            borderTopColor:colores.primary,
            borderTopWidth: 0,
            elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize:15,
        },
        tabBarIcon: ({color,focused})=>{
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps-outline';
              break;
            case 'Tab2Screen':
              iconName = 'layers-outline';
              break;
            case 'StackNavigator':
              iconName = 'happy-outline';
              break;
          }
          return <Text style={{color}}><Icon name={iconName} size={20}/></Text>;
        },
      })
    }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabsNAvigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}