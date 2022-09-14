import { StackScreenProps } from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}
export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  // const params = route.params as RouterParams;

  const {changeUserName} = useContext(AuthContext)
  useEffect(() => {
    navigation.setOptions({
      title:params.nombre,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    changeUserName(params.nombre)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  );
};
