/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-raw-text */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useState} from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import config from '../utils/config';
import {renderFlatList} from '../utils/renderFlatList';
import loginStyle from './LoginStyle';
import base64 from 'react-native-base64';

export const WatchScreen = () => {
  const [watchData, setWatchData] = useState([]);
  const [base64Token, setBase64Token] = useState<string>('');

  const convertToken = async () => {
    const temp = await AsyncStorage.getItem('Token');
    if (temp) {
      console.log('dsasdasddsa', base64.encode(temp));
      // base64.encode(temp);
      // console.log('dsasdasddsa', window.btoa(temp));
      // setBase64Token(window.btoa(temp));
      setBase64Token(base64.encode(temp));
    }
  };

  const getWatch = async () => {
    // GET request using axios with set headers
    const headers = {
      Authorization: `Basic NzNiNGE3NmI2YTU3ZWQxMWE3NmUwMDE1NWQ0MjYxNGQ= `,
      // Authorization: `Basic ${base64Token}`,
    };

    const res = await axios.get(`${config.api.baseURL}/myaccount/watches`, {
      headers,
    });
    setWatchData(res.data.response.lots);
  };
  React.useEffect(() => {
    convertToken();
    getWatch();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={loginStyle.scrollViewStyle}>
        <View style={loginStyle.wacthViewStyle}>
          <Text style={loginStyle.textStyle}>BiClone's WatchList</Text>
        </View>
        {watchData.length > 0 ? (
          <FlatList
            data={watchData}
            renderItem={({item}) => renderFlatList(item)}
            horizontal={false}
          />
        ) : (
          <View style={{alignItems: 'center'}}>
            <ActivityIndicator animating size="large" color="#222222" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
