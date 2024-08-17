import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Styles = {
  container: ViewStyle;
  checkbox: ViewStyle;
  checkedCheckbox: ViewStyle;
  checkmark: ImageStyle;
  label: TextStyle;
};
// Define styles for the component
const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14,
  },
  checkbox: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderColor: '#161718',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    borderColor: 'teal',
  },
  checkmark: {
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 20,
    color: '#333',
  },
});
export default styles;
