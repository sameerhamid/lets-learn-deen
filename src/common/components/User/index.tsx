import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../constants/images';
import styles from './styles';
export interface UserType {
  name: string;
  profileImg?: string;
  email?: string;
  phone?: string;
}
interface Props {
  onUserClick?: (user?: UserType) => void;
  user?: UserType;
}

const deafalutProps: Props = {
  onUserClick: undefined,
  user: undefined,
};

const User = (props: typeof deafalutProps): React.ReactElement => {
  const {user, onUserClick} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onUserClick?.()}>
      <View style={styles.imgVw}>
        <Image source={user?.profileImg ?? IMAGES.USER} style={styles.img} />
      </View>

      <Text style={styles.txt}>{user?.name ?? ''}</Text>
    </TouchableOpacity>
  );
};

export default User;
