import React, {useRef, useState, useContext, useEffect} from 'react';
import {Button, Card} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_MAPS_API_KEY, BASE_URL} from '@env';
import {ScrollView, Dimensions} from 'react-native';
import AuthStore from '../store/AuthStore';
import axios from 'axios';
import Loader from '../components/Loader';
const height = Dimensions.get('window').height;
const About = ({navigation}) => {
  const mapRef = useRef();
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [markPoints, setMarkPoints] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fn = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      };
      const response = await axios.get(BASE_URL + 'shops', config);
      setMarkPoints(response.data);
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
                    longitudeDelta: 0.5,
                    latitudeDelta: 0.5,
                  }}
                  maxZoomLevel={25}
                  minZoomLevel={2}
                  provider={PROVIDER_GOOGLE}
                  ref={mapRef}
                  style={{
                    height: height - 100,
                    width: '100%',
                  }}
                  apiKey={GOOGLE_MAPS_API_KEY}>
                  {markPoints &&
                    markPoints.map((item, index) => {
                      return (
                        <Marker
                          coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                          }}
                          title="EasyGo Pickup Spot"
                          description={item.description}
                          identifier={String(index)}
                          onCalloutPress={() => {
                            setLoader(true);
                            setTimeout(() => {
                              setLoader(false);
                              navigation.navigate({
                                name: 'RentalBill',
                                params: {
                                  title: item.description,
                                  availability: item.availability,
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
