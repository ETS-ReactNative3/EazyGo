import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInputPaper from '../components/TextInput';
import {Button, Card} from 'react-native-paper';
import styles from '../styles/Login';
import {Avatar} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '../store/AuthStore';
import Loader from '../components/Loader';
import {showMessage} from 'react-native-flash-message';
import {BASE_URL} from '@env ';
const Register = () => {
  const [email_phone, setEmail_Phone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [token, setToken, userLocation] = useContext(AuthStore);
  const [loader, setLoader] = useState(false);
  const email_phone_Set = value => {
    setEmail_Phone(value);
  };
  const passwordSet = value => {
    setPassword(value);
  };
  const confirmpasswordSet = value =>{
    setConfirmPassword(value);
  }
  const frgt_pswd = () => {
    console.log('Forgot Password Called');
  };
  const signup = () => {
    console.log('Signup Called');
  };
  const loginHandler = async () => {
    setLoader(true);
    setTimeout(async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const payload = {
        email: email_phone,
        password: password,
      };
      try {
        const response = await axios.post('regsiter', payload, config);
        if (response) {
          if (response.data) {
            await AsyncStorage.setItem('@userdata', response.data.token);
            setToken(response.data.token);
          }
        }
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }, 1000);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <View style={styles.cont}>
          <View style={styles.container}>
            <Avatar.Image
              size={140}
              source={require('../assets/images/logoii.jpg')}
              style={styles.head}
            />
            <Text style={styles.header}>EazyGo</Text>
          </View>
          <View style={styles.card_cont}>
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.signincont}>
                  <Text style={styles.signin}>Register</Text>
                </View>
                <TextInputPaper
                  label="Email/Phone"
                  value={email_phone}
                  onChange={email_phone_Set}
                  style={styles.textField}
                />
                <TextInputPaper
                  label="Password"
                  value={password}
                  secureTextEntry={true}
                  onChange={passwordSet}
                  style={styles.textField}
                />
                <TextInputPaper
                  label="Confirm Password"
                  value={confirmPassword}
                  secureTextEntry={true}
                  onChange={confirmpasswordSet}
                  style={styles.textField}
                />
                <Button
                  mode="contained"
                  onPress={loginHandler}
                  style={styles.login_btn}>
                  Register
                </Button>
                <View>
                  <TouchableOpacity onPress={frgt_pswd}>
                    <Text style={styles.forgotpswd}>
                      Forgot Password? Need Help
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={signup}>
                    <Text style={styles.signup}>
                      Already have an Account? Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      )}
    </>
  );
};

export default Register;
