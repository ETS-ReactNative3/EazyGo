import React, { useState, useContext, useEffect, useRef } from 'react';
import { Button, Card, Avatar } from 'react-native-paper';
import abc1 from '../assets/images/Aboutisuzu/abc1.jpg';
import abc2 from '../assets/images/Aboutisuzu/abc2.jpg';
import abc3 from '../assets/images/Aboutisuzu/abc3.png';
import abc4 from '../assets/images/Aboutisuzu/abc4.png';
import abc5 from '../assets/images/Aboutisuzu/abc5.png';
import abc6 from '../assets/images/Aboutisuzu/abc6.png';
import abc7 from '../assets/images/Aboutisuzu/abc7.jpg';
import abc8 from '../assets/images/Aboutisuzu/abc8.jpg';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, Animated, SafeAreaView } from 'react-native';
import Carouselcomp from '../components/Carousalcomp';
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




const Aboutisuzu = () => {

  return (
    <View style={{ flex: 1 }} >

      <Carouselcomp data={DATA} />
    </View>
  );

}

export default Aboutisuzu;
