import React, {useState, useRef} from 'react';
import {Button, Avatar} from 'react-native-paper';
//import axios from 'axios';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import HiLander from '../assets/images/carTypes/HiLander.jpg';
import VCross from '../assets/images/carTypes/VCross.jpg';
import Scab from '../assets/images/carTypes/scab.jpg';
import Mux from '../assets/images/carTypes/Mux.jpg';
import { StyleSheet ,StatusBar,Text} from 'react-native';
const RentalBill = ({navigation, route}) => {
  const {title} = route && route.params;
  const [fare, setFare] = useState();
  const carRef = useRef();
  const entries = [
    {
      title: 'S-Cab',
      images: Scab,
      price: 1,
    },
    {
      title: 'muX',
      images: Mux,
      price: 1.4,
    },
    {
      title: 'HiLander',
      images: HiLander,
      price: 2,
    },
    {
      title: 'D-Max',
      images: Dmax,
      price: 0.75,
    },
    {
      title: 'V-Cross',
      images: VCross,
      price: 1.75,
    },
  ];
  const sliderWidth = 500,
    itemWidth = 300;
  const _renderItem = ({item, index}) => {
    return (
      <Card style={styles.slide}>
        <Avatar.Image size={200} source={item.images} style={styles.head} />
        <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => {
            const response = {
              from: from,
              to: to,
              rate: (item.price * fare).toFixed(2),
            };
            console.log(response);
          }}>
          Book
        </Button>
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
      <Button style={{color:'#000',fontWeight:'bold',fontSize:30,alignItems:'center',justifyContent:'center',marginTop:20}}>{title} Pickup Point</Button>
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
})

export default RentalBill;
