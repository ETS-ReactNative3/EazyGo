import React from 'react';
import {Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../styles/Splash';

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Animatable.Image
          animation="zoomIn"
          style={styles.logo}
          resizeMode="stretch"
          source={require('../assets/images/Raster.png')}
        />
      </View>
      <Animatable.Text animation="zoomIn">
        <Text style={styles.text}>ISUZU EazyGo</Text>
      </Animatable.Text>
    </View>
  );
};

export default SplashPage;
