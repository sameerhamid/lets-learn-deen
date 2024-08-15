import {
  FlexAlignType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

type Styles = {
  container: ViewStyle;
  leftContainer: ViewStyle;
  leftImgVw: ViewStyle;
  leftImg: ImageStyle;
  middleContainer: ViewStyle;
  titleTxt: TextStyle;
  rightContainer: ViewStyle;
  rightImgVw: ViewStyle;
  rightImg: ImageStyle;
};

const styles = (
  headerTextAlignment: FlexAlignType | undefined = 'center',
  marginHorizontal: number = 10,
): Styles =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: 'white',
      flexDirection: 'row',
      height: 55,
      paddingHorizontal: 18,
    },
    leftContainer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    leftImgVw: {
      width: 40,
      height: 30,
      justifyContent: 'center',
      padding: 15,
    },
    leftImg: {
      height: 20,
      width: 18,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    middleContainer: {
      flex: 1,
      alignItems: headerTextAlignment,
      justifyContent: 'center',
      marginHorizontal: marginHorizontal,
    },
    titleTxt: {
      fontSize: 22,
      color: 'black',
    },
    rightContainer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    rightImgVw: {
      height: 25,
      width: 25,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    rightImg: {
      height: 20,
      width: 15,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });

export default styles;
