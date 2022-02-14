import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import {TextInput, Card} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import styles from '../styles/PlaceInput';
import {TouchableOpacity, View, FlatList, Text, ScrollView} from 'react-native';

const PlacesInput = () => {
  const [places, setPlaces] = useState();
  const [location, setLocation] = useState();
  const [userLocation, setUserLocation] = useState();
  const [locationGot, setLocationGot] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const response = {
        latitude: currentLatitude,
        longitude: currentLongitude,
      };
      setUserLocation(response);
      setLocationGot(true);
    });
  }, []);

  useEffect(() => {
    if (userLocation) {
      const hereApiSearch = async () => {
        const response = await axios.get(
          'https://places.ls.hereapi.com/places/v1/autosuggest?at=' +
            userLocation.latitude +
            ',' +
            userLocation.longitude +
            '&q=' +
            location +
            '&apiKey=LPDM4xB5up24Y4vmgMOub8kNxX1pV3nxYcJrIJNctx4',
        );
        const results = response.data.results;
        const allPlaces = [];
        for (let i = 0; i < results.length/2+1; i++) {
          allPlaces.push({key: results[i].title});
        }
        setPlaces(allPlaces);
      };
      hereApiSearch();
    }
  }, [location]);
  useEffect(() => {
    console.log(places);
    if (!selected) {
      setShowList(false);
      setShowList(true);
    } else setShowList(false);
    setSelected(false);
  }, [places]);
  return (
    <>
      {locationGot ? (
        <>
          <TextInput
            value={location}
            placeholder="From"
            style={styles.placeInput}
            onChangeText={value => setLocation(value)}
          />
          {showList && places ? (
            <>
              <ScrollView style={styles.container}>
                <Card style={{backgroundColor: 'lightgrey'}}>
                  {places.map(item => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setSelected(true);
                          setLocation(item.key);
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
      ) : null}
    </>
  );
};

export default PlacesInput;
