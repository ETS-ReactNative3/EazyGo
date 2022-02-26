import React, {useState, useEffect, useContext, useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AuthStore from '../store/AuthStore';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {Text} from 'react-native-paper';
const PlacesInput = ({setPlace, label}) => {
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [defaultLocation, setdefaultLocation] = useState('');
  const ref = useRef();
  return (
    <>
      <Text style={{fontSize:17,color:'white',margin:3,fontFamily:'sans-serif'}}>{label}</Text>
      <GooglePlacesAutocomplete
        onPress={async (data, details = null) => {
          let response = {
            title: details.formatted_address,
            geometry: {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            },
          };
          setPlace(response);
        }}
        ref={ref}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        placeholder={label}
        placeholderTextColor="#000"
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
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 0,
            backgroundColor: 'white',
            alignItems: 'center',
          },
          textInput: {color: 'black', placeholderTextColor: '#000'},
          listView: {color: 'black', opacity: 1, width: '100%'},
          row: {color: 'black'},
          predefinedPlacesDescription: {color: 'black'},
          description: {color: 'black'},
        }}
        enablePoweredByContainer={false}
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
