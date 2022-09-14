import React from 'react';
import { View,Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <TouchableIcon name="rocket" size={80} color="#900" />
          <TouchableIcon name="body-outline" size={80} color="#900"/>
          <TouchableIcon name="airplane-outline" size={80} color="#900"/>
          <TouchableIcon name="cash-outline" size={80} color="#900"/>
          <TouchableIcon name="color-palette-outline" size={80} color="#900"/>
          <TouchableIcon name="flower-outline" size={80} color="#900"/>
          <TouchableIcon name="happy-outline" size={80} color="#900"/>
          <TouchableIcon name="magnet-outline" size={80} color="#900"/>
        </Text>
    </View>
  );
};
