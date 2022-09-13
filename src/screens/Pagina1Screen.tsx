/* eslint-disable react-native/no-inline-styles */
// import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Text, View,  } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/dist/Ionicons';

// interface Props extends DrawerScreenProps<any, any> { };
interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: ()=> (
  //       <Button 
  //         title="Menú"
  //         onPress = { ()=> navigation.toggleDrawer()}
  //         />
  //       )
  //     })
  // }, [])
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{ marginVertical:20, fontSize:20, marginLeft: 5}}>Navegar con argumentos</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:'#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro',
          })}
        >
          <Icon name="man-outline" size={40} style={{color:'white'}}/>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:'#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria',
          })}
        >
          <Icon name="woman-outline" size={40} style={{color:'white'}}/>
          <Text style={styles.botonGrandeTexto}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
