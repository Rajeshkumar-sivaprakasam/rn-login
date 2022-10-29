/* eslint-disable react-native/no-color-literals */
import axios from 'axios';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import Separator from '../utils/Separator';
import loginStyle from './LoginStyle';
import * as RootNavigation from '../navigation/RootNavigation';
import config from '../utils/config';

export const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log('helleoo', userName, ' pwd', userPassword);
    setErrortext('');
    setLoading(true);
    //username check
    if (!userName) {
      Alert.alert(
        'Warning',
        'Please Enter Username',
        [
          {
            text: 'Ok',
            // onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
      setLoading(false);
      return;
    }
    //password check
    if (!userPassword) {
      Alert.alert(
        'Warning',
        'Please Enter Password',
        [
          {
            text: 'Ok',
            // onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
      setLoading(false);
      return;
    }

    let res;

    //api call
    try {
      res = await axios.post(`${config.api.baseURL}/authentication/signin`, {
        userName: userName,
        password: userPassword,
      });
      if (res.success === true) {
        setLoading(false);
        //token need to add in redux
        RootNavigation.navigate('Sample');
      }
    } catch (e) {
      setLoading(false);
      setErrortext(JSON.stringify(e));
    }

    console.log('res', res.data);
  };
  return (
    <View style={loginStyle.mainViewStyle}>
      <View style={loginStyle.versionStyle}>
        <Image source={require(`../../src/assert/ic_launcher_round.png`)} />
        <Text style={loginStyle.headerStyle}>BiClone</Text>
      </View>
      <View style={loginStyle.viewStyle}>
        <TextInput
          style={loginStyle.inputStyle}
          onChangeText={name => setUserName(name.trim())}
          placeholder="Username" //abc123
          placeholderTextColor="#222222"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          value={userName}
          blurOnSubmit={false}
        />
      </View>
      <View style={loginStyle.viewStyle}>
        <TextInput
          style={loginStyle.inputStyle}
          onChangeText={pwd => setUserPassword(pwd.trim())}
          placeholder="Password" //abc123
          placeholderTextColor="#222222"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="next"
          secureTextEntry={true}
          blurOnSubmit={false}
          value={userPassword}
        />
      </View>
      {errortext != '' ? (
        <Text style={loginStyle.errorTextStyle}>{errortext}</Text>
      ) : null}
      <TouchableOpacity
        style={loginStyle.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmit}>
        {loading ? (
          <ActivityIndicator animating size="large" color="#ffffff" />
        ) : (
          <Text style={loginStyle.buttonTextStyle}>LOGIN</Text>
        )}
      </TouchableOpacity>
      <Separator />
      <View style={loginStyle.versionStyle}>
        <Text style={{color: '#222222'}}>V.1.0</Text>
      </View>
    </View>
  );
};
