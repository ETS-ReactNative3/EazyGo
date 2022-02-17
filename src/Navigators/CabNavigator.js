import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CabBook from '../pages/CabBook';

const CabNavigator = () => {
  const {Navigator: StackNavigator, Screen: StackScreen} =
    createNativeStackNavigator();
  return (
    <StackNavigator initialRouteName="CabHome">
      <StackScreen name="CabHome" options={{headerShown: false}}>
        {props => <Home {...props} />}
      </StackScreen>
      <StackScreen name="CabBook" options={{headerShown: false}}>
        {props => <CabBook {...props} />}
      </StackScreen>
    </StackNavigator>
  );
};

export default CabNavigator;
