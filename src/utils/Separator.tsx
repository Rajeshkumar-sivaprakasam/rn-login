/* eslint-disable react-native/sort-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
const Separator = () => {
  console.log('sep');
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  separator: {
    borderBottomColor: '#222222',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 150,
  },
});
