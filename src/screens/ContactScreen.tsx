import React, { useContext } from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {
  const {signIn,logOut, authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>
      {!authState.isLoggedIn
      ? ( <Button
        title="SignIn"
        onPress={signIn}
      />)
    : ( <Button
      title="LogOut"
      onPress={logOut}
    />)
    }
    </View>
  );
};
