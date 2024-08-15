import React from 'react';
import {View} from 'react-native';

interface Props {
  height?: number;
}

const defaultProps: Props = {
  height: 0,
};

const Spacer = (props: typeof defaultProps): React.ReactElement => {
  const {height} = props;
  if (!height) {
    throw new Error('Spacer requires a height prop.');
  }

  const styles = {
    spacer: {
      height: height,
    },
  };

  return <View style={styles.spacer} />;
};
export default Spacer;
