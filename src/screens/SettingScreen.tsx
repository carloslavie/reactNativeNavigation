import React, {useContext} from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {
  const {authState} = useContext(AuthContext);
  const inset = useSafeAreaInsets();//esto es relativo porque en android en esta version al parecer ya no es necesario, pero sirve para agregar propiedades de safe area
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: inset.top + 20}}
    >
      <Text style={styles.title}>SettingScreen</Text>
      <Text >{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={150} color={colores.primary} />}
    </View>
  )
}
