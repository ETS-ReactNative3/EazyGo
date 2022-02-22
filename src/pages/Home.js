import React, {useState, useContext, useEffect, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Button, Card, Avatar} from 'react-native-paper';
import PlacesInput from '../components/PlacesInput';
import AuthStore from '../store/AuthStore';
import {
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import HiLander from '../assets/images/carTypes/HiLander.jpg';
import VCross from '../assets/images/carTypes/VCross.jpg';
import Scab from '../assets/images/carTypes/scab.jpg';
import Mux from '../assets/images/carTypes/Mux.jpg';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY, HERE_API, BASE_URL} from '@env';
import {showMessage} from 'react-native-flash-message';
const height = Dimensions.get('window').height;
const Home = ({navigation}) => {
  const [fare, setFare] = useState();
  const entries = [
    {
      title: 'S-Cab',
      images: Scab,
      price: 1,
      type: 'scab',
    },
    {
      title: 'muX',
      images: Mux,
      price: 1.4,
      type: 'mux',
    },
    {
      title: 'HiLander',
      images: HiLander,
      price: 2,
      type: 'hilander',
    },
    {
      title: 'D-Max',
      images: Dmax,
      price: 0.75,
      type: 'dmax',
    },
    {
      title: 'V-Cross',
      images: VCross,
      price: 1.75,
      type: 'vcross',
    },
  ];
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [avail, setavail] = useState(false);
  const carRef = useRef();
  const mapRef = useRef();
  const fromSet = value => {
    setFrom(value);
  };
  const toSet = value => {
    setTo(value);
  };
  useEffect(() => {
    setavail(false);
  }, [from, to]);
  const rateCheck = async () => {
    if (from && to) {
      const response = await axios.get(
        'https://router.hereapi.com/v8/routes?transportMode=car&origin=' +
          String(from.geometry.latitude) +
          ',' +
          String(from.geometry.longitude) +
          '&destination=' +
          String(to.geometry.latitude) +
          ',' +
          String(to.geometry.longitude) +
          '&return=summary&apiKey=' +
          String(HERE_API),
      );
      setFare(
        (response.data.routes[0].sections[0].summary.length / 50).toFixed(2),
      );
      setavail(true);
    } else {
      showMessage({
        message: 'Please enter the pickup and drop Location',
        type: 'danger',
        style: {
          alignItems: 'center',
        },
      });
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <Card style={styles.slide}>
        <Avatar.Image size={200} source={item.images} style={styles.head} />
        <Text style={{color: 'black', textAlign: 'center', fontSize: 20}}>
          Fare: {(item.price * fare).toFixed(2)} Rs
        </Text>
        <Button
          mode="contained"
          onPress={async () => {
            const response = {
              type: item.type,
            };
            const config = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: token,
              },
            };
            const resp = await axios.post(BASE_URL + 'cabs', response, config);
            if (resp.data)
              navigation.navigate({
                name: 'CabBook',
                params: {
                  item: item,
                  response: resp.data,
                  price: (item.price * fare).toFixed(2),
                  from: from,
                  to: to,
                },
              });
          }}>
          Book
        </Button>
        <Button mode="outlined" style={{marginTop: 10}}>
          {item.title}
        </Button>
      </Card>
    );
  };

  const sliderWidth = 400,
    itemWidth = 260;
  return (
    <>
      {userLocation ? (
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={styles.scrollView}
            keyboardShouldPersistTaps="always">
            <Card style={styles.card}>
              <PlacesInput setPlace={fromSet} label={'From Destination'} />
              <PlacesInput setPlace={toSet} label={'To Destination'} />
            </Card>
            <Card style={styles.mapcont}>
              <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.fullmap}
                maxZoomLevel={25}
                minZoomLevel={2}
                userInterfaceStyle={'dark'}
                initialRegion={{
                  latitude: parseFloat(userLocation.latitude),
                  longitude: parseFloat(userLocation.longitude),
                  longitudeDelta: 0.1,
                  latitudeDelta: 0.1,
                }}
                loadingEnabled={true}
                tintColor={'#000'}
                apiKey={GOOGLE_MAPS_API_KEY}
                showsUserLocation={true}
                followsUserLocation={true}
                userLocationPriority="high">
                {from ? <Marker coordinate={from.geometry} /> : null}
                {to ? <Marker coordinate={to.geometry} /> : null}
                {from && to ? (
                  <MapViewDirections
                    origin={from.geometry}
                    destination={to.geometry}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={5}
                    strokeColor="blue"
                  />
                ) : null}
              </MapView>
            </Card>
            {from && to && avail ? (
              <Carousel
                ref={carRef}
                data={entries}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
              />
            ) : (
              <Button
                mode="contained"
                style={{marginTop: 10}}
                onPress={rateCheck}>
                Check Rate
              </Button>
            )}
          </ScrollView>
        </SafeAreaView>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  fullmap: {
    height: height * 0.615,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  slide: {
    height: 340,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  card: {
    marginBottom: 20,
  },
});

export default Home;
