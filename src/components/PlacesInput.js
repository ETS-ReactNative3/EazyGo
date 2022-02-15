import React, {useState, useEffect, useContext} from 'react';
import Config from 'react-native-config';
import {TextInput, Card} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import styles from '../styles/PlaceInput';
import {TouchableOpacity, View, FlatList, Text, ScrollView} from 'react-native';
import AuthStore from '../store/AuthStore';
//import Geolocation from '@react-native-community/geolocation';
const PlacesInput = ({setPlace, label}) => {
  const [places, setPlaces] = useState();
  const [location, setLocation] = useState();
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [locationGot, setLocationGot] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
  console.log(userLocation);
    if (location) {
      const hereApiSearch = async () => {
        const response = await axios.get(
          'https://places.ls.hereapi.com/places/v1/autosuggest?at=27.2046,77.4977&q=' +
            location +
            '&apiKey=LPDM4xB5up24Y4vmgMOub8kNxX1pV3nxYcJrIJNctx4',
        );
        const results = response.data.results;
        const allPlaces = [];
        for (let i = 0; i < results.length / 2 + 1; i++) {
          allPlaces.push({key: results[i].title});
        }
        setPlaces(allPlaces);
      };
      hereApiSearch();
    }
  }, [location]);
  useEffect(() => {
    if (!selected) {
      setShowList(false);
      setShowList(true);
    } else setShowList(false);
    setSelected(false);
  }, [places]);
  return (
    <>
      <TextInput
        value={location}
        placeholder={label}
        style={styles.placeInput}
        onChangeText={value => setLocation(value)}
      />
      {showList && places && location ? (
        <>
          <ScrollView style={styles.container}>
            <Card style={{backgroundColor: 'lightgrey'}}>
              {places.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(true);
                      setLocation(item.key);
                      setPlace(item.key);
                    }}>
                    <Text style={styles.item}>{item.key}</Text>
                  </TouchableOpacity>
                );
              })}
            </Card>
          </ScrollView>
        </>
      ) : null}
    </>
  );
};

export default PlacesInput;
