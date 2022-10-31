/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-raw-text */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export const renderFlatList = (item: any) => {
  return (
    <TouchableOpacity>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.firstSubView}>
            <View>
              <Image
                source={{uri: `${item.image}`}}
                style={styles.imageStyle}
              />
            </View>
            <View>
              <Text>{item.auctionTitle}</Text>
              <Text>( {item.quantity} Items )</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2e2e2',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 10,
  },
  firstSubView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 50,
    height: 50,
    marginRight: 10,
    width: 50,
  },
});
