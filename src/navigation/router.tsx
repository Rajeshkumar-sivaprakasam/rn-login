/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Text} from 'react-native';
import {LoginScreen} from '../screen/LoginScreen';
import * as RootNavigation from '../navigation/RootNavigation';

const SamplePage = () => {
  console.log('sample');
  return <Text numberOfLines={5}>Hello Google</Text>;
};

const Router = () => {
  const Stack = createStackNavigator();
  const [showLoading, setShowLoading] = React.useState(true);
  const [initialState, setInitialState] = React.useState<string>('');

  console.log('Hey router');
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
      {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
};

export default Router;
