import {StyleSheet, ViewStyle} from 'react-native';

type Styles = {
  safeAreaView: ViewStyle;
  pageVw: ViewStyle;
};
const styles = (isPaddingFromBottom?: boolean): Styles =>
  StyleSheet.create<Styles>({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#e7e6e6',
      paddingBottom: isPaddingFromBottom ? 10 : 0,
    },
    pageVw: {
      //   flex: 1,
    },
  });
export default styles;
