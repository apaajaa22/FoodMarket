import {Picker} from '@react-native-picker/picker';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../atoms';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>City</Text>
      <Gap height={6} />
      <View style={styles.input}>
        <Picker style={styles.label}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
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
