import React, {useRef, useContext} from 'react';
import {Button, Card, Avatar} from 'react-native-paper';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {ScrollView, Dimensions,Image} from 'react-native';
import AuthStore from '../store/AuthStore';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width
console.log(width);
const CabBook = ({navigation, route}) => {
  const ref = useRef();
  const {item, response, price, from, to} = route && route.params;
  const [token, setToken, userLocation] = useContext(AuthStore);
  return (
    <>
      {userLocation ? (
        <ScrollView>
          <Button
            mode="contained"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            Booking Confirmation
          </Button>
          <Button style={{marginTop: 10}}>From : {from.title}</Button>
          <Button>To : {to.title}</Button>
          <Card
            style={{width: '90%', marginHorizontal: '5%', marginBottom: 15}}>
            <MapView
              style={{
                height: height * 0.415,
                width: '100%',
                backgroundColor: 'lightgrey',
              }}
              ref={ref}
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
              userLocationPriority="high"
              provider={PROVIDER_GOOGLE}>
              <Marker
                coordinate={{
                  latitude: parseFloat(response.location.latitude),
                  longitude: parseFloat(response.location.longitude),
                }}
                title={response.driverName}
              />
              <MapViewDirections
                origin={from.geometry}
                destination={to.geometry}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeWidth={5}
                strokeColor="blue"
              />
            </MapView>
          </Card>
          <Card
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '5%',
            }}>
            <Image source={require('../assets/images/gift.gif')} style={{width:width*0.78125,height:180,justifyContent:'center'}}/>
            <Button mode="contained" style={{marginTop: 20}}>
              Driver Name : {response.driverName}
            </Button>
            <Button>Driver Number : {response.phone}</Button>
            <Button>Register Number : {response.regnumber}</Button>
            <Button mode="outline" style={{marginBottom: 10}}>
              OTP : {response.otp}
            </Button>
          </Card>
        </ScrollView>
      ) : null}
    </>
  );
};

export default CabBook;
