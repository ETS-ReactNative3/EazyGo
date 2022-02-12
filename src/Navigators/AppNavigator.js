import React,{useEffect} from 'react';
import PagesNavigator from './PagesNavigator';
import AuthNavigator from './AuthNavigator';
import {PermissionsAndroid, AppState} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {showMessage} from 'react-native-flash-message';
const AppNavigator = () => {
  const login = true;
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'eBeat App Location Permission',
          message: 'eBeat App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        showMessage({
          message: 'Location permission denied',
          type: 'danger',
          titleStyle: {textAlign: 'center'},
        });
        return false;
      }
    } catch (err) {
      console.warn('error in AppNavigator', err);
      return false;
    }
  };
  const fn = async () => {
    let status = await requestCameraPermission();
  };
  fn();
  return <>{!login ? <AuthNavigator /> : <PagesNavigator />}</>;
};

export default AppNavigator;
