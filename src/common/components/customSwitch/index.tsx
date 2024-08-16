import {View, Text, TouchableOpacity, ColorValue, FlatList} from 'react-native';
import React, {useState} from 'react';

import stylesObj from './styles';

interface SwitchPropType {
  id: number;
  title: string;
}

interface Props {
  bgColor?: ColorValue | undefined;
  onTabChange?: (_index: number, title: string) => void;
  switchData?: SwitchPropType[];
}

const deafalutProps: Props = {
  onTabChange: undefined,
  switchData: undefined,
};

const CustomSwitch = (props: typeof deafalutProps): React.ReactElement => {
  // ** ** ** ** ** HOOKS ** ** ** ** **

  const styles = stylesObj();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {onTabChange, switchData} = props;

  // ** ** ** ** RENDER RETURNS ** ** ** **
  return (
    <FlatList
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      data={switchData}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            setSelectedIndex(index);
            onTabChange?.(item.id, item.title);
          }}
          style={[
            styles.tab,
            {
              backgroundColor: selectedIndex === index ? 'teal' : 'transparent',
            },
          ]}>
          <Text
            style={[
              styles.txtStyle,
              {
                color: selectedIndex === index ? 'white' : 'black',
              },
            ]}>
            {item?.title ?? ''}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CustomSwitch;
