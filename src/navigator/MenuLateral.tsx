import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import {useWindowDimensions} from 'react-native'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = ()=> {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   drawerPosition:"right"
      // }}
      screenOptions={{
        drawerType:width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props)=> <MenuInterno{...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps) => {

  return (
      <DrawerContentScrollView>
        {/* parte avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri:'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png'
            }}
            style={styles.avatar}
          />
        </View>

        {/* opciones de menu */}
        <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={styles.menuBoton}
              onPress={()=> navigation.navigate('Tabs')}
            >
              <Text style={styles.menuText}><Icon name="list-outline" size={25}/> Navegación</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBoton}>
              <Text 
                style={styles.menuText}
                onPress={()=> navigation.navigate('SettingScreen')}
              ><Icon name="settings-outline" size={25}/> Ajustes</Text>
            </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}