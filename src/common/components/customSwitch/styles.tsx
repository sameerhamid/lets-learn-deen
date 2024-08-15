import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  tab: ViewStyle;
  txtStyle: TextStyle;
  contentContainerStyle: ViewStyle;
};

const styles = (): Styles =>
  StyleSheet.create<Styles>({
    contentContainerStyle: {
      width: '100%',
      flex: 1,
      columnGap: 6,
      justifyContent: 'center',
    },
    tab: {
      borderRadius: 20,
      alignSelf: 'center',
      height: '100%',
      minWidth: 100,
      borderColor: 'teal',
      borderWidth: 1,
    },
    txtStyle: {
      fontSize: 16,
      color: 'black',
      paddingVertical: 8,
      paddingHorizontal: 8,
      textAlign: 'center',
    },
  });

export default styles;
