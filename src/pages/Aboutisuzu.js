import React, { useState, useContext, useEffect, useRef } from 'react';
import { Button, Card, Avatar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { State, FlingGestureHandler, Directions } from 'react-native-gesture-handler';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, Animated, SafeAreaView } from 'react-native';
import abc1 from '../assets/images/Aboutisuzu/abc1.jpg';
import abc2 from '../assets/images/Aboutisuzu/abc2.jpg';
import abc3 from '../assets/images/Aboutisuzu/abc3.png';
import abc4 from '../assets/images/Aboutisuzu/abc4.png';
import abc5 from '../assets/images/Aboutisuzu/abc5.png';
import abc6 from '../assets/images/Aboutisuzu/abc6.png';
import abc7 from '../assets/images/Aboutisuzu/abc7.jpg';
import abc8 from '../assets/images/Aboutisuzu/abc8.jpg';

const width = Dimensions.get("window").width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const DATA = [
  {
    title: 'ISUZU',
    poster: abc1,
    desc: 'ISUZU\'s Commercial Vehicles are sold in over 100 countries Worlwide',
  },
  {
    title: 'MILEAGE',
    poster: abc2,
    desc: 'ISUZU Trucks offers the Best Mileage for trucks across the Globe',
  },
  {
    title: 'ENGINES',
    poster: abc3,
    desc: 'Highly Powerful and \n Efficient Engines',
  },
  {
    title: 'POWER',
    poster: abc5,
    desc: 'ISUZU trucks provides \n Max Power and Torque ',
  },
  {
    title: 'SAFETY',
    poster: abc6,
    desc: 'ISUZU trucks prioritize Driver\'s \n Safety over Everything else',
  },
  {
    title: 'HUGE PRIVATE SPACE',
    poster: abc7,
    desc: 'One of the Major Merits of \n ISUZU Pickup Trucks',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    
  },
  slide: {
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 5,
    justifyContent: 'center',

  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 0,
    color: 'black',
    padding: 0,
  },
  cards: {
    marginTop: 80,
    borderRadius: 25,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  img: {
    marginTop: 20,
    height: '60%',
    width: '100%',
    resizeMode: 'contain'
  }
});



const Aboutisuzu = () => {

  const _renderItem = ({ item }) => {
    return (
      <Card style={styles.cards}>
        <Text style={styles.slide}>{item.title}</Text>
        <Image style={styles.img} source={item.poster} />
        <Text style={styles.desc}>{item.desc}</Text>
      </Card>
    );
  }


  return (
    <View style={{ flex: 1 }} >

      <Carousel
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH - 100}
        itemWidth={300}
      >
      </Carousel>
    </View>
  );

}

export default Aboutisuzu;
