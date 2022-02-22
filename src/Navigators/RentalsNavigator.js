import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../pages/About';
import RentalBill from '../pages/RentalBill';
import RentYourCar from '../pages/RentYourCar';

const RentalNavigator = () => {
  const {Navigator: StackNavigator, Screen: StackScreen} =
    createNativeStackNavigator();
  return (
    <>
      <StackNavigator initialRouteName="RentalBill">
        <StackScreen name="RentalHome" options={{headerShown: false}}>
          {props => <About {...props} />}
        </StackScreen>
        <StackScreen name="RentalBill" options={{headerShown: false}}>
          {props => <RentalBill {...props} />}
        </StackScreen>
        <StackScreen name="RentYourCar" options={{headerShown: false}}>
          {props => <RentYourCar {...props} />}
        </StackScreen>        
      </StackNavigator>
    </>
  );
};

export default RentalNavigator;
