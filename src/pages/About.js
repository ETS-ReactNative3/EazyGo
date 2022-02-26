import React, {useRef, useState, useContext, useEffect} from 'react';
import {Button, Card} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_MAPS_API_KEY, BASE_URL} from '@env';
import {ScrollView, Dimensions} from 'react-native';
import AuthStore from '../store/AuthStore';
import axios from 'axios';
import Loader from '../components/Loader';
const height = Dimensions.get('window').height;
const About = ({navigation, route}) => {
  const mapRef = useRef();
  const [token, setToken, userLocation] = useContext(AuthStore);
  const {from, to, type,rate} = route && route.params;
  const [markPoints, setMarkPoints] = useState();
  const [users, setUsers] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fn = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      };
      const payload = {
        type: type,
      };
      const response = await axios.post(BASE_URL + 'shops', payload, config);
      setMarkPoints(response.data);
      const payl = {
        type: type,
        from: from,
        to: to,
        location: userLocation,
      };
      const res = await axios.post(BASE_URL + 'rent/show_rent', payl, config);
      setUsers(res.data);
    };
    fn();
  }, []);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          {userLocation ? (
            <ScrollView>
              <Button
                mode="contained"
                style={{
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Select a Pickup Point To Continue
              </Button>
              <Card>
                <MapView
                  initialRegion={{
                    latitude: parseFloat(userLocation.latitude),
                    longitude: parseFloat(userLocation.longitude),
                    longitudeDelta: 0.3,
                    latitudeDelta: 0.3,
                  }}
                  maxZoomLevel={25}
                  minZoomLevel={2}
                  provider={PROVIDER_GOOGLE}
                  ref={mapRef}
                  style={{
                    height: height - 100,
                    width: '100%',
                  }}
                  showsUserLocation={true}
                  apiKey={GOOGLE_MAPS_API_KEY}>
                  {markPoints &&
                    markPoints.map((item, index) => {
                      return (
                        <Marker
                          coordinate={{
                            latitude: parseFloat(item.latitude),
                            longitude: parseFloat(item.longitude),
                          }}
                          title="EazyGo Pickup Spot"
                          description={item.description}
                          identifier={String(index)}
                          onCalloutPress={async () => {
                            setLoader(true);
                            setLoader(false);
                            navigation.navigate({
                              name: 'RentalFinalBill',
                              params: {
                                from: from,
                                to: to,
                                location : {
                                  latitude: item.latitude,
                                  longitude : item.longitude,
                                  id: item._id,
                                },
                                description : "EazyGo Pickup Spot - " + item.description,
                                type:type,
                                rate: rate,
                                rental_type : 0
                              },
                            });
                          }}
                        />
                      );
                    })}
                  {users &&
                    users.map((item, index) => {
                      return (
                        <Marker
                          coordinate={{
                            latitude: parseFloat(item.location.latitude),
                            longitude: parseFloat(item.location.longitude),
                          }}
                          pinColor="#A633FF"
                          title="Private Pickup Spot"
                          description={item.description}
                          identifier={String(index)}
                          onCalloutPress={() => {
                            setLoader(true);
                            setTimeout(() => {
                              setLoader(false);
                              navigation.navigate({
                                name: 'RentalFinalBill',
                                params: {
                                  from: from,
                                  to: to,
                                  location:{
                                    latitude: item.location.latitude,
                                    longitude: item.location.longitude,
                                    id: item._id
                                  },
                                  description: 'Private Pickup Spot',
                                  type:type,
                                  rate: rate,
                                  rental_type : 1
                                },
                              });
                            }, 1000);
                          }}
                        />
                      );
                    })}
                </MapView>
              </Card>
            </ScrollView>
          ) : null}
        </>
      )}
    </>
  );
};

export default About;
