import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from './styles/Login';
import image from './assets/images/image.png';
const App = () => {
  return (
    <>
      <View style={styles.container}></View>
      <View>
        <Text>Phone Number/Email</Text>
        <TextInput />
        <Text>Password</Text>
        <TextInput />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
