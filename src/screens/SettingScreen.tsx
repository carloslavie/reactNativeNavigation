import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingScreen = () => {

  const inset = useSafeAreaInsets();//esto es relativo porque en android en esta version al parecer ya no es necesario, pero sirve para agregar propiedades de safe area
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: inset.top + 20}}
    >
      <Text style={styles.title}>SettingScreen</Text>
    </View>
  )
}
