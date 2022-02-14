import React,{useState} from 'react';
import {Button} from 'react-native-paper';
import PlacesInput from '../components/PlacesInput';
const Home = () => {
  const [from,setFrom] = useState();
  const [to,setTo] = useState();
  const fromSet = value =>{
    setFrom(value);
  }
  const toSet = value =>{
    setTo(value);
  }
  const bookHandler = async() =>{
    console.log(from);
    console.log(to);
  }
  return (
    <>
      <PlacesInput setPlace={fromSet} label={"From Destination"}/>
      <PlacesInput setPlace={toSet} label={"To Destination"} />
      <Button onPress={bookHandler}>BOOK</Button>
    </>
  );
};

export default Home;
