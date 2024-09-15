import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {IMAGES} from '../../constants/images';
import styles from './styles';
// Define the props interface for the checkbox component
interface CustomCheckboxProps {
  label: string;
  isChecked?: boolean;
  onValueChange?: (newValue: boolean) => void;
}

// Create the CustomCheckbox component
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  isChecked = false,
  onValueChange,
}) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  console.log('state>>>', checked);

  useEffect(() => {
    if (isChecked) {
      setChecked(isChecked);
    }
  }, [isChecked]);

  const handlePress = () => {
    setChecked(!checked);
    if (onValueChange) {
      onValueChange(!checked);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <Image source={IMAGES.CHECK} style={styles.checkmark} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
