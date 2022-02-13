import React,{useEffect,useState} from 'react';
import PagesNavigator from './PagesNavigator';
import AuthNavigator from './AuthNavigator';
import {PermissionsAndroid, AppState} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {showMessage} from 'react-native-flash-message';
import SplashPage from '../pages/SplashPage';
const AppNavigator = () => {
  const login = true;
  const [splash,setSplash] = useState(true);
  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: 'EasyGo App Location Permission',
  //         message: 'EasyGo App needs access to your location ',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       return true;
  //     } else {
  //       showMessage({
  //         message: 'Location permission denied',
  //         type: 'danger',
  //         titleStyle: {textAlign: 'center'},
  //       });
  //       return false;
  //     }
  //   } catch (err) {
  //     console.warn('error in AppNavigator', err);
  //     return false;
  //   }
  // };
  // const fn = async () => {
  //   let status = await requestCameraPermission();
  // };
  // fn();
  setTimeout(() => {
    setSplash(false);
  }, 3000);
  if(splash)
    return <SplashPage />;
  
  return <>{!login ? <AuthNavigator /> : <PagesNavigator />}</>;
};

export default AppNavigator;
