import React, { useState, useContext, useEffect, useRef } from 'react';
import { Button, Card, Avatar } from 'react-native-paper';
import i1 from '../assets/images/Customtypes/vegetabletray.jpg';
import i2 from '../assets/images/Customtypes/milktanks.jpeg';
import i3 from '../assets/images/Customtypes/bedlineroverrail.jpg';
import i4 from '../assets/images/Customtypes/canopy.jpg';
import i5 from '../assets/images/Customtypes/cargobikecarrier.jpg';
import i6 from '../assets/images/Customtypes/cargonet.jpg';
import i7 from '../assets/images/Customtypes/hardlid.jpg';
import i8 from '../assets/images/Customtypes/sportsbar.jpg';

import { View, ScrollView, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, Animated, SafeAreaView } from 'react-native';
import Carouselcomp from '../components/Carousalcomp';
const Data = [
    {
        title: 'Vegetable/Grocery Trays',
        poster: i1,
        desc: '',
    },
    {
        title: 'Milk Tank',
        poster: i2,
        desc: '',
    },
    {
        title: 'Bed-Line Over Rail',
        poster: i3,
        desc: '',
    },
    {
        title: 'Canopy',
        poster: i4,
        desc: '',
    },
    {
        title: 'Cargo Bike Carrier',
        poster: i5,
        desc: '',
    },
    {
        title: 'Cargo Net',
        poster: i6,
        desc: '',
    },
    {
        title: 'Hard Lid',
        poster: i7,
        desc: '',
    },
    {
        title: 'Sports bar',
        poster: i8,
        desc: '',
    },
];
const Carcustom = (props) => {

    return (
        <View style={{ flex: 1 }} >

            <Carouselcomp data={Data} />

        </View>
    );

}

export default Carcustom;
