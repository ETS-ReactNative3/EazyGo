import React, {useState, useRef, useEffect,useContext} from 'react';
import {Button, Avatar} from 'react-native-paper';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import HiLander from '../assets/images/carTypes/HiLander.jpg';
import VCross from '../assets/images/carTypes/VCross.jpg';
import Scab from '../assets/images/carTypes/scab.jpg';
import Mux from '../assets/images/carTypes/Mux.jpg';
import {StyleSheet, StatusBar, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {BASE_URL} from '@env';
import AuthStore from '../store/AuthStore';
const RentalBill = ({navigation, route}) => {
  const {title, availability, items} = route && route.params;
  //console.log(items)
  const [fare, setFare] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const carRef = useRef();
  const [book, setBook] = useState(false);
  const [token,setToken,userLocation] = useContext(AuthStore);
  useEffect(() => {
    setBook(false);
  }, [date, toDate]);
  const entries = [
    {
      title: 'S-Cab',
      images: Scab,
      price: 1,
      availability: availability[0].scab,
      type: 'scab',
    },
    {
      title: 'muX',
      images: Mux,
      price: 1.4,
      availability: availability[0].mux,
      type: 'mux',
    },
    {
      title: 'HiLander',
      images: HiLander,
      price: 2,
      availability: availability[0].hilander,
      type: 'hilander',
    },
    {
      title: 'D-Max',
      images: Dmax,
      price: 0.75,
      availability: availability[0].dmax,
      type: 'dmax',
    },
    {
      title: 'V-Cross',
      images: VCross,
      price: 1.75,
      availability: availability[0].vcross,
      type: 'vcross',
    },
  ];
  const sliderWidth = 500,
    itemWidth = 300;

  const checkRate = async () => {
    const d1 = date.getTime();
    const d2 = toDate.getTime();
    if (d2 - d1 >= 7200000) {
      const mod = (d2 - d1) / 86400000;
      setFare(mod * 1250);
      setBook(true);
    } else {
      showMessage({
        message: 'Duration must be atleast Hours',
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
        <Avatar.Image size={200} source={item.images} style={{marginTop: 20}} />
        {book && item.availability ? (
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
              onPress={async() => {
                const request = {
                  type: item.type,
                  id : items._id
                };
                console.log(request);
                const config = {
                  headers:{
                    'Content-Type' : 'application/json',
                    'Authorization' : token
                  }
                }
                const response = await axios.post(BASE_URL+'cabs/rental',request,config);
                console.log(response);
              }}>
              Book
            </Button>
          </>
        ) : null}
        <Button mode="outlined" style={{marginTop: 10}}>
          {item.title}
        </Button>
        {item.availability ? (
          <Button>Availability : {item.availability}</Button>
        ) : (
          <Button color="red">Currently Unavailable</Button>
        )}
      </Card>
    );
  };
  return (
    <>
      <Button
        mode="contained"
        style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
        Rental Booking
      </Button>
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
        {title} Pickup Point
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
        {format(date, 'dd-MM-yyyy   -   hh:mm')}
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
        }}
        onPress={() => setOpen1(true)}>
        {format(toDate, 'dd-MM-yyyy   -   hh:mm')}
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
      {!book ? (
        <>
          <Button
            mode="contained"
            onPress={checkRate}
            style={{width: '90%', marginHorizontal: '5%', marginTop: 25}}>
            Check Rate
          </Button>
        </>
      ) : null}
      <Carousel
        ref={carRef}
        data={entries}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
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
    height: 500,
    width: '100%',
    backgroundColor: 'lightgrey',
  },
  slide: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    marginBottom: 20,
  },
});

export default RentalBill;
