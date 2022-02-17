import React, { useState, useContext, useEffect, useRef } from 'react';
import { Button, Card, Avatar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { State, FlingGestureHandler, Directions } from 'react-native-gesture-handler';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, Animated, SafeAreaView } from 'react-native';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import HiLander from '../assets/images/carTypes/HiLander.jpg';
import VCross from '../assets/images/carTypes/VCross.jpg';
import Scab from '../assets/images/carTypes/scab.jpg';
import Mux from '../assets/images/carTypes/Mux.jpg';

const width = Dimensions.get("window").width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
const DATA = [
  {
    title: 'D-Max',
    location: 'XXX',
    others: 'XXX',
    poster: Dmax,
    desc:'Isuzu\'s multi-purpose vehicle',
  },
  {
    title: 'Hi-Lander',
    location: 'XXX',
    others: 'XXX',
    poster: HiLander,
    desc:'Used for tourism',
  },
  {
    title: 'V-Cross',
    location: 'XXX',
    others: 'XXX',
    poster: VCross,
    desc:'Used for travel in tough terrains',
  },
  {
    title: 'S-Cab',
    location: 'XXX',
    others: 'XXX',
    poster: Scab,
    desc:'Best suited in Construction sector',
  },
  {
    title: 'Mux',
    location: 'XXX',
    others: 'XXX',
    poster: Mux,
    desc:'Used for Cabs - Comfortable & Spacious',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: -1,
    
    justifyContent: 'center',

  },
  desc:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    padding:10,
  },
  cards: {
    marginTop:80,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  img:{
    marginTop:20,
    height:'60%',
    width: '100%',
    resizeMode: 'contain'
  }
});



const Aboutisuzu = () => {

  const _renderItem = ({ item}) => {
    return (
      <Card style={styles.cards}>
        <Text style={styles.slide}>{item.title}</Text>
        <Image style={styles.img} source={item.poster}  />
        <Text style={styles.desc}>{item.desc}</Text>
      </Card>
    );
  }


  return (
    <View style={{ flex: 1 }} >

      <Carousel
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH-100}
        itemWidth={300}
      >
      </Carousel>
    </View>
  );

}

export default Aboutisuzu;