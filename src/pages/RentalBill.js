import React, {useState, useRef, useEffect, useContext} from 'react';
import {Button, Avatar} from 'react-native-paper';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import HiLander from '../assets/images/carTypes/HiLander.jpg';
import VCross from '../assets/images/carTypes/VCross.jpg';
import Scab from '../assets/images/carTypes/scab.jpg';
import Mux from '../assets/images/carTypes/Mux.jpg';
import {StyleSheet, StatusBar, Text, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {BASE_URL} from '@env';
import AuthStore from '../store/AuthStore';
const RentalBill = ({navigation, route}) => {
  const [fare, setFare] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const carRef = useRef();
  const [book, setBook] = useState(false);
  const [token, setToken, userLocation] = useContext(AuthStore);
  useEffect(() => {
    setBook(false);
  }, [date, toDate]);
  const entries = [
    {
      title: 'D-Max',
      images: Dmax,
      price: 1,
      type: 'dmax',
    },
    {
      title: 'S-Cab',
      images: Scab,
      price: 1.15,
      type: 'scab',
    },
    {
      title: 'HiLander',
      images: HiLander,
      price: 1.7,
      type: 'hilander',
    },
    {
      title: 'V-Cross',
      images: VCross,
      price: 1.925,
      type: 'vcross',
    },
  ];
  const sliderWidth = 500,
    itemWidth = 300;
  const _renderItem = ({item, index}) => {
    return (
      <Card style={styles.slide}>
        <Avatar.Image size={200} source={item.images} style={{marginTop: 20}} />
        {book ? (
          <>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 20,
                marginTop: 10,
              }}>
              Rate : {(fare * item.price).toFixed(2)} Rs
            </Text>
            <Button
              mode="contained"
              style={{marginTop: 10}}
              onPress={async () => {
                const request = {
                  from: date,
                  to: toDate,
                  type: item.type,
                };
                console.log(request);
                navigation.navigate({
                  name: 'RentalHome',
                  params: {from: date, to: toDate, type: item.type,rate:(fare * item.price).toFixed(2)},
                });
              }}>
              Check Availability
            </Button>
          </>
        ) : null}
        <Button mode="outlined" style={{marginTop: 10}}>
          {item.title}
        </Button>
      </Card>
    );
  };
  return (
    <ScrollView>
      <Button
        mode="contained"
        style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
        Rental Booking
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RentYourCar')}
        style={{
          marginTop: 15,
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 4,
        }}>
        Want to Rent your Pickup Truck?
      </Button>
      <Card style={{margin: 10}}>
        <Button
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          Rental Booking
        </Button>
        <Text
          style={{
            color: '#000',
            marginLeft: '10%',
            fontSize: 17,
            marginBottom: 10,
          }}>
          Rental From Date:
        </Text>
        <Button
          mode="outlined"
          style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '10%',
          }}
          onPress={() => setOpen(true)}>
          {format(date, 'dd-MM-yyyy   -   hh:mm aa')}
        </Button>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Text
          style={{
            color: '#000',
            marginLeft: '10%',
            fontSize: 17,
            marginBottom: 10,
            marginTop: 20,
          }}>
          Rental To Date:
        </Text>
        <Button
          mode="outlined"
          style={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: '10%',
            marginTop: 5,
            marginBottom: 20,
          }}
          onPress={() => setOpen1(true)}>
          {format(toDate, 'dd-MM-yyyy   -   hh:mm aa')}
        </Button>
        <DatePicker
          modal
          open={open1}
          date={toDate}
          onConfirm={date => {
            setOpen1(false);
            setToDate(date);
          }}
          onCancel={() => {
            setOpen1(false);
          }}
        />
      </Card>
      {!book ? (
        <Button
          mode="contained"
          style={{width: '80%', marginHorizontal: '10%', marginTop: 20}}
          onPress={async () => {
            const d1 = date.getTime();
            const d2 = toDate.getTime();
            if (d2 - d1 >= 7200000) {
              const mod = (d2 - d1) / 86400000;
              console.log(mod)
              if (mod >= 3) {
                setFare(mod*1600); 
              }
              else
                setFare(mod * 24 * 200);
              setBook(true);
            } else {
              showMessage({
                message: 'Duration must be atleast 2 Hours',
                type: 'danger',
                style: {
                  alignItems: 'center',
                },
              });
            }
          }}>
          Check Rate
        </Button>
      ) : (
        <Carousel
          ref={carRef}
          data={entries}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      )}
    </ScrollView>
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
    height: 500,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  slide: {
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    marginBottom: 20,
  },
});

export default RentalBill;
