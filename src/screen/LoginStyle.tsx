/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#EEDD82',
  },
  headerStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#002222',
  },
  viewStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    height: 60,
    color: '#000000',
    paddingLeft: 20,
    paddingRight: 15,
    // paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 30,
    // borderColor: '#dadae8',
  },
  buttonStyle: {
    backgroundColor: '#222222',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#222222',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    height: 70,
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  versionStyle: {
    alignItems: 'center',
  },
});

export default styles;
