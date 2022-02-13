import React from 'react';
import Config from 'react-native-config';
import { TextInput } from 'react-native-paper';
import {getCurrentLocation} from '../actions/actions';
const PlacesInput = () => {
  const [places,setPlaces] = useState();
  const [location,setLocation] = useState();
  const fn = async()=>{
    const response = await getCurrentLocation();
  }
  fn();
  return (
    <TextInput 
      value = {places}
      onChange = {(value) => setPlaces(value)}

    />
  );
};

export default PlacesInput;