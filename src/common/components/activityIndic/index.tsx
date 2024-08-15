import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import styles from './style';

interface Props {
  visible?: boolean;
}

const defaultProps: Props = {
  visible: false,
};
// parent component of all apps to show common lodaer
const ActivityIndic = (props: typeof defaultProps): React.ReactElement => (
  <Modal
    //  supportedOrientations={['landscape-left', 'landscape-right']}
    visible={props?.visible}
    transparent>
    <View style={styles.container}>
      <View style={styles.backgroundVw} />
      <View style={styles.mnVw}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  </Modal>
);

export default ActivityIndic;
