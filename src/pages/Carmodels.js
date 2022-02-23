import React, { useState, useContext, useEffect, useRef } from 'react';
import { Button, Card, Avatar } from 'react-native-paper';
import Dmax from '../assets/images/carTypes/Dmax.jpg';
import tour from '../assets/images/carTypes/tour.jpg';
import VC from '../assets/images/carTypes/vc.png';
import Sc from '../assets/images/carTypes/sc.jpg';
import Muxx from '../assets/images/carTypes/muxx.jpg';

import { View, ScrollView, Text, StyleSheet, Dimensions, Image, StatusBar, FlatList, Animated, SafeAreaView } from 'react-native';
import Carouselcomp from '../components/Carousalcomp';
import Carcustom from './Carcustom';
const Data = [
    {
        title: 'D-Max',
        poster: Dmax,
        desc: 'Isuzu\'s most multi-purpose vehicle',
    },
    {
        title: 'Hi-Lander',
        poster: tour,
        desc: 'Used for tourism',
    },
    {
        title: 'V-Cross',
        poster: VC,
        desc: 'Used for travel in tough terrains',
    },
    {
        title: 'S-Cab',
        poster: Sc,
        desc: 'Best suited in Construction sector',
    },
    {
        title: 'Mux',
        poster: Muxx,
        desc: 'Used for Cabs - Comfortable & Spacious',
    },
];

const Carmodels = (props) => {
    const [pressed,setpressed]=useState(false);
    const clickHandler=()=>{
        setpressed(!pressed);
    }
    
                    
    return (
        <View style={{ flex: 1 }} >
            
            {!pressed&& <Carouselcomp data={Data} />}
            {!pressed&&<Button mode='outlined' style={{marginHorizontal:'5%',width:'90%',marginBottom:15}} onPress={clickHandler}>
                                Click to see customisation
                        </Button>
            }
            
            {pressed&&<Text style={{backgroundColor:'black',textAlign:'center',marginTop:10,fontSize:18,padding:10,color:'white'}}>Car Models Customisation</Text>}
            {pressed&&<Carcustom/>}
            {pressed&&<Button mode='outlined' style={{marginHorizontal:'5%',width:'90%',marginBottom:15}} onPress={clickHandler}>
                                Go back to car models
                        </Button>
            }
            
            
            
        </View>
    );

}

export default Carmodels;
