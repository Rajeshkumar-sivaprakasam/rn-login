/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Text} from 'react-native';
import {LoginScreen} from '../screen/LoginScreen';
import * as RootNavigation from '../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WatchScreen} from '../screen/WatchScreen';

const SamplePage = () => {
  const [tokenValue, setTokenValue] = React.useState('');

  const getToken = async () => {
    const value = (await AsyncStorage.getItem('token')) as string;
    setTokenValue(value);
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return <Text numberOfLines={5}>{tokenValue}</Text>;
};

const Router = () => {
  const Stack = createStackNavigator();
  const [showLoading, setShowLoading] = React.useState(true);
  const [initialState, setInitialState] = React.useState<string>('');

  React.useEffect(() => {
    setInitialState('Login');
    // RootNavigation.navigate('Sample');
  }, []);

  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sample"
        component={SamplePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Watch"
        component={WatchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
