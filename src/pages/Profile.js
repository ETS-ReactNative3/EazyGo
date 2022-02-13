import React,{useContext} from 'react';
import {Button} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import AuthStore from '../store/AuthStore';

const Profile = () => {
  const [token, setToken] = useContext(AuthStore);
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
  return (
    <>
      <Button style={{marginTop:300}} onPress={logoutHandler}>Logout</Button>
    </>
  );
};

export default Profile;
