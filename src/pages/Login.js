import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TextInputPaper from '../components/TextInput';
import {Button} from 'react-native-paper';
import styles from '../styles/Login';
import {Avatar} from 'react-native-paper';

const Login = () => {
  const [email_phone, setEmail_Phone] = useState('');
  const [password, setPassword] = useState('');
  const email_phone_Set = value => {
    setEmail_Phone(value);
  };
  const passwordSet = value => {
    setPassword(value);
  };
  const frgt_pswd = () => {
    console.log('Forgot Password Called');
  };
  const signup = () => {
    console.log('Signup Called');
  };
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <Avatar.Image
          size={140}
          source={require('../assets/images/Raster.png')}
          style={styles.head}
        />
        <Text style={styles.header}>EazyGo</Text>
      </View>
      <View>
          <View style={styles.signincont}>
            <Text style={styles.signin}>LOGIN</Text>
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
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.login_btn}>
          Login
        </Button>
        <View>
          <TouchableOpacity onPress={frgt_pswd}>
            <Text style={styles.forgotpswd}>Forgot Password? Need Help</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={signup}>
            <Text style={styles.signup}>Dont have an Account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;