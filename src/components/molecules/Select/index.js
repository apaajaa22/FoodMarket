import {Picker} from '@react-native-picker/picker';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';

const Select = ({value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>City</Text>
      <Gap height={6} />
      <View style={styles.input}>
        <Picker
          style={styles.label}
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChange(itemValue)}>
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Jogjakarta" value="Jogjakarta" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
