import React, {useContext} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Icons {
    name:string;
    color: string;
    size: number
}
export const TouchableIcon = ({name,color, size} : Icons) => {
    const {changeFavoriteAction} = useContext(AuthContext);
  return (
    <TouchableOpacity
        onPress={()=>changeFavoriteAction(name)}
    >
        <Text>
        <Icon name={name} size={size} color={color}/>
        </Text>
    </TouchableOpacity>
  );
};
