import React from 'react';
import Geolocation from '@react-native-community/geolocation';
export const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const location = {
        latitude: currentLatitude,
        longitude: currentLongitude,
      };
      return location;
    },
  );
};
