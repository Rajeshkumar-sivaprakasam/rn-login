/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-raw-text */

import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron, {
  networking,
  trackGlobalErrors,
} from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  // .configure({host: 'http://127.0.0.1', name: 'BiClone'}) // controls connection & communication settings
  .configure({name: 'BiClone'}) // controls connection & communication settings
  .use(networking()) // after adding this line it's connection as expected!
  .use(
    trackGlobalErrors({
      // veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
      offline: true,
    }),
  )
  .connect(); // let's connect!
