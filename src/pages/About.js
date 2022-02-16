import React, {useRef, useState, useContext, useEffect} from 'react';
import {Button, Card} from 'react-native-paper';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {ScrollView,Dimensions} from 'react-native';
import AuthStore from '../store/AuthStore';

const height = Dimensions.get('window').height;
const About = ({navigation}) => {
  const mapRef = useRef();
  const [token,setToken,userLocation] = useContext(AuthStore);
  console.log(userLocation)
  const markPoints = [
    {
      latitude : 13.0500,
      longitude : 80.2824,
      description : 'Marina Beach'
    },{
      latitude: 13.0631549,
      longitude: 80.1772462,
      description: 'Madhuravoyal'
    },{
      latitude:13.0850,
      longitude:80.2101,
      description:'Anna Arch'
    },{
      latitude:12.7517,
      longitude:80.2033,
      description: 'SSN College of Engineering'
    },{
      latitude:13.0109,
      longitude:80.2354,
      description:'Anna University'
    },{
      latitude:12.9249,
      longitude:80.1000,
      description:'Tambaram'
    },{
      latitude:12.9815,
      longitude:80.2180,
      description: 'Velachery'
    }
  ]
  return (
    <>
      {userLocation ? (
        <ScrollView>
          <Button mode="contained" style={{height:50,alignItems:'center',justifyContent:'center'}}>Select a Pickup Point To Continue</Button>
          <Card>
            <MapView
              initialRegion={{
                latitude: parseFloat(userLocation.latitude),
                longitude: parseFloat(userLocation.longitude),
                longitudeDelta: 0.5,
                latitudeDelta: 0.5
              }}
              maxZoomLevel={25}
              minZoomLevel={2}
              provider={PROVIDER_GOOGLE}
              ref={mapRef}
              style={{
                height: height-100,
                width: '100%',
              }}
              apiKey={GOOGLE_MAPS_API_KEY}
            >
              {markPoints.map((item,index)=>{
                return(
                  <Marker
                   coordinate={{
                     latitude:item.latitude,
                     longitude:item.longitude
                   }}
                   title='EasyGo Pickup Spot'
                   description={item.description}
                   identifier={String(index)}
                   onCalloutPress={() =>{
                     navigation.navigate({name : 'RentalBill',params: {title:item.description}})
                   }
                  }
                   />
                )
              })}
              </MapView>
          </Card>
        </ScrollView>
      ) : null}
    </>
  );
};

export default About;
