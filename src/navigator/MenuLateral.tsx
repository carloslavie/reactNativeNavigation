import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import {useWindowDimensions} from 'react-native'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import { styles } from '../theme/appTheme';

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
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
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
              uri:'https://thumbs.dreamstime.com/z/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'
            }}
            style={styles.avatar}
          />
        </View>

        {/* opciones de menu */}
        <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={styles.menuBoton}
              onPress={()=> navigation.navigate('StackNavigator')}
            >
              <Text style={styles.menuText}>Navecación</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBoton}>
              <Text 
                style={styles.menuText}
                onPress={()=> navigation.navigate('SettingScreen')}
              >Ajustes</Text>
            </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}