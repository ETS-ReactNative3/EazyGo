import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from '../pages/About';
import RentalBill from '../pages/RentalBill';
const RentalNavigator = () => {
  const {Navigator: StackNavigator, Screen: StackScreen} =
    createNativeStackNavigator();
  return (
    <>
      <StackNavigator initialRouteName="RentalHome">
        <StackScreen name="RentalHome" options={{headerShown: false}}>
          {props => <About {...props} />}
        </StackScreen>
        <StackScreen name="RentalBill" options={{headerShown: false}}>
          {props => <RentalBill {...props} />}
        </StackScreen>
      </StackNavigator>
    </>
  );
};

export default RentalNavigator;
