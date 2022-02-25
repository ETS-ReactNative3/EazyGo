import React from 'react';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const width = Dimensions.get('window').width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  slide: {
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 5,
    justifyContent: 'center',
  },
  desc: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 0,
    color: 'black',
    padding: 0,
  },
  cards: {
    marginTop: 80,
    borderRadius: 25,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  img: {
    marginTop: 20,
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
});

const Carousalcomp = props => {
  const _renderItem = ({item}) => {
    return (
      <Card style={styles.cards}>
        <Text style={styles.slide}>{item.title}</Text>
        <Image style={styles.img} source={item.poster.valueOf()} />
        <Text style={styles.desc}>{item.desc}</Text>
      </Card>
    );
  };
  //const data = (props.msg=='About')?data=data1:data=data2;

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={props.data}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH - 100}
        itemWidth={300}></Carousel>
    </View>
  );
};

export default Carousalcomp;
