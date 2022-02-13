import React, {useEffect, useState} from 'react';
import PagesNavigator from './PagesNavigator';
import AuthNavigator from './AuthNavigator';
// import {PermissionsAndroid, AppState} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import {showMessage} from 'react-native-flash-message';
import SplashPage from '../pages/SplashPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '../store/AuthStore';
const AppNavigator = () => {
  const [splash, setSplash] = useState(true);
  const [data, setData] = useState(false);
  const [token, setToken] = useState();
  const fn = async () => {
    const authToken = await AsyncStorage.getItem('@userdata');
    setToken(authToken);
    setData(true);
  };
  fn();
  setTimeout(() => {
    setSplash(false);
  }, 3000);
  if (splash) return <SplashPage />;
  console.log(token);
  return (
    <>
      {data ? (
        <AuthStore.Provider value={[token, setToken]}>
          {token ? <PagesNavigator /> : <AuthNavigator />}
        </AuthStore.Provider>
      ) : null}
    </>
  );
};

export default AppNavigator;
