import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { View,Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
        <Icon name="rocket" size={80} color="#900"/>
        <Icon name="body-outline" size={80} color="#900"/>
        <Icon name="airplane-outline" size={80} color="#900"/>
        <Icon name="cash-outline" size={80} color="#900"/>
        <Icon name="color-palette-outline" size={80} color="#900"/>
        <Icon name="flower-outline" size={80} color="#900"/>
        <Icon name="happy-outline" size={80} color="#900"/>
        <Icon name="magnet-outline" size={80} color="#900"/>
        </Text>
    </View>
  )
}