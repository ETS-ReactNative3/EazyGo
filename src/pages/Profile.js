import React,{useContext} from 'react';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '../store/AuthStore';
import { StyleSheet, Text, Pressable } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Aboutisuzu from './Aboutisuzu';
import Aboutus from './Aboutus';

const Profile = () => {
  const [token, setToken,userLocation] = useContext(AuthStore);
  const Tab = createMaterialTopTabNavigator();
  const logoutHandler = async () => {
    const userData = await AsyncStorage.getItem('@userdata');
    if (userData) {
      const token = userData;
      const config = {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      };
      const data = {};
      await axios.post(
        'https://easy-go-nec.herokuapp.com/v1/auth/logout',
        data,
        config,
      );
      AsyncStorage.removeItem('@userdata');
      setToken(null);
    }
  };
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      margin:16,
      marginTop:20,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  

  return (
    <> 
      <Tab.Navigator
        screenOptions={
          {tabBarPressColor:'black'}
        }>
      <Tab.Screen name="About Isuzu" component={Aboutisuzu} />
      <Tab.Screen name="About Us" component={Aboutus} />
      
      </Tab.Navigator>
    
    <Pressable style={styles.button} onPress={logoutHandler} >
      <Text style={styles.text}>Logout</Text>
    </Pressable>
    </>
  );
};

export default Profile;