import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  imgVw: ViewStyle;
  img: ImageStyle;
  txt: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    borderColor: '#aa9f9f47',
    borderWidth: 0.5,
    padding: 12,
  },
  imgVw: {
    width: 54,
    height: 54,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  txt: {
    color: 'black',
    fontSize: 18,
  },
});
export default styles;
