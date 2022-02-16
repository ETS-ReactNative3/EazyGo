import React, {useState, useEffect, useContext, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AuthStore from '../store/AuthStore';
import {GOOGLE_MAPS_API_KEY} from '@env';
const PlacesInput = ({setPlace, label}) => {
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [defaultLocation, setdefaultLocation] = useState('');
  const ref = useRef();
  return (
    <>
      <GooglePlacesAutocomplete
        onPress={async (data, details = null) => {
          console.log(details.formatted_address, details.geometry);
          let response = {
            title: details.formatted_address,
            geometry: {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            },
          };
          console.log(response);
          setPlace(response);
        }}
        ref={ref}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        placeholder={label}
        placeholderTextColor="#000"
        fetchDetails={true}
        debounce={200}
        keyboardShouldPersistTaps={'handled'}
        listViewDisplayed={false}
        listUnderlayColor={'transparent'}
        returnKeyType={'search'}
        enableHighAccuracyLocation={true}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]}
        styles={{
          container: {
            borderColor: '#000',
            borderWidth: 0.5,
            color: '#000',
            backgroundColor: 'white',
            alignItems: 'center',
            width: '100%',
            flexGrow: 1,
          },
          textInputContainer: {
            fontSize: 16,
            alignItems: 'center',
            borderColor: 'black',
            placeholderTextColor: '#000',
          },
          textInput: {color: 'black'},
          listView: {color: 'black', opacity: 1, width: '100%'},
          row: {color: 'black'},
          predefinedPlacesDescription: {color: 'black'},
          description: {color: 'black'},
        }}
        textInputProps={{
          onChangeText: text => {
            setdefaultLocation(text);
          },
        }}
      />
    </>
  );
};

export default PlacesInput;
