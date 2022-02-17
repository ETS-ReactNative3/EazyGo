import React from 'react';
import {Text, View, Image,ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../styles/Splash';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          resizeMode="stretch"
          source={require('../assets/images/logoii.jpg')}
        />
      </View>
      <Animatable.Text animation="zoomIn">
          <ActivityIndicator size="large" color="#000" />
      </Animatable.Text>
    </View>
  );
};

export default Loader;