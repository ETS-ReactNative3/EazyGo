import React, {useEffect, useState} from 'react';
import PagesNavigator from './PagesNavigator';
import AuthNavigator from './AuthNavigator';
import SplashPage from '../pages/SplashPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '../store/AuthStore';
import Geolocation from '@react-native-community/geolocation';
const AppNavigator = () => {
  const [splash, setSplash] = useState(true);
  const [data, setData] = useState(false);
  const [token, setToken] = useState();
  const [userLocation, setUserLocation] = useState();
  useEffect(() => {
    const fn = async () => {
      const authToken = await AsyncStorage.getItem('@userdata');
      setToken(authToken);
      setData(true);
      Geolocation.getCurrentPosition(
        position => {
          const currentLongitude = JSON.stringify(position.coords.longitude);
          const currentLatitude = JSON.stringify(position.coords.latitude);
          const response = {
            latitude: currentLatitude,
            longitude: currentLongitude,
          };
          console.log(response);
          setUserLocation(response);
        },
        error => {
          console.log(error.message.toString());
        },
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
      );
    };
    fn();
  }, []);
  setTimeout(() => {
    setSplash(false);
  }, 3000);
  if (splash) return <SplashPage />;
  return (
    <>
      {data ? (
        <AuthStore.Provider value={[token, setToken, userLocation]}>
          {token ? <PagesNavigator /> : <AuthNavigator />}
        </AuthStore.Provider>
      ) : null}
    </>
  );
};

export default AppNavigator;
