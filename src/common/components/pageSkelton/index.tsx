import {FlexStyle, StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import ActivityIndic from '../activityIndic';
import stylesObj from './style';

interface Props {
  visible?: boolean;
  justifyContent?: FlexStyle['justifyContent'];
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  safeAreaVw?: StyleProp<ViewStyle>;
  isSafeAreaView?: boolean;
  isPaddingFromBottom?: boolean;
}

const defaultProps: Props = {
  visible: false,
  justifyContent: 'center',
  children: undefined,
  containerStyle: undefined,
  isSafeAreaView: false,
  isPaddingFromBottom: false,
};
const PageSkelton = (props: typeof defaultProps): React.ReactElement => {
  // ** ** ** ** ** HOOKS ** ** ** ** **

  const styles = stylesObj(props?.isPaddingFromBottom);

  // ** ** ** ** RENDER RETURNS ** ** ** **
  return (
    <View style={[styles.safeAreaView, props?.safeAreaVw]}>
      {props?.isSafeAreaView ? (
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={[
            styles.safeAreaView,
            {marginHorizontal: 15},
            props?.mainContainerStyle,
          ]}>
          <ActivityIndic visible={props?.visible ?? false} />
          {!!props?.children && (
            <View
              style={[
                styles.pageVw,
                {justifyContent: props?.justifyContent},
                props?.containerStyle,
              ]}>
              {props?.children}
            </View>
          )}
        </SafeAreaView>
      ) : (
        <View
          style={[
            styles.safeAreaView,
            {paddingHorizontal: 20},
            props?.mainContainerStyle,
          ]}>
          <ActivityIndic visible={props?.visible ?? false} />
          <View
            style={[
              styles.pageVw,
              {justifyContent: props?.justifyContent},
              props?.containerStyle,
            ]}>
            {props?.children}
          </View>
        </View>
      )}
    </View>
  );
};

export default PageSkelton;
