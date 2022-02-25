import React, {useContext, useState} from 'react';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '../store/AuthStore';
import {StyleSheet, Text, Pressable, Linking} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BASE_URL} from '@env';
import Aboutisuzu from './Aboutisuzu';
import Aboutus from './Aboutus';
import Carmodels from './Carmodels';

const Profile = () => {
  const [token, setToken, userLocation] = useContext(AuthStore);

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
      await axios.post(BASE_URL, data, config);
      AsyncStorage.removeItem('@userdata');
      setToken(null);
    }
  };
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      margin: 16,
      marginTop: 20,
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
        swipeEnabled={false}
        screenOptions={({tabBarPressColor: 'black'}, {swipeEnabled: false})}>
        <Tab.Screen
          name="About Isuzu"
          component={Aboutisuzu}
          swipeEnabled={false}
        />
        <Tab.Screen name="Car Models" component={Carmodels} />
        <Tab.Screen name="About Us" component={Aboutus} />
      </Tab.Navigator>

      <Button
        mode="outlined"
        style={{marginHorizontal: '5%', width: '90%', marginTop: 10}}
        onPress={async () => {
          await Linking.openURL('https://www.isuzu.in/product/');
        }}>
        More On Isuzu
      </Button>
      <Pressable style={styles.button} onPress={logoutHandler}>
        <Text style={styles.text}>Logout</Text>
      </Pressable>
    </>
  );
};

export default Profile;
