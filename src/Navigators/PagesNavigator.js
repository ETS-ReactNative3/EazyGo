import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Profile from '../pages/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import colors from '../assets/theme.colors';
import RentalNavigator from './RentalsNavigator';
import CabNavigator from './CabNavigator';
import {Icon} from 'react-native-elements';
const {Navigator: TabNavigator, Screen: TabScreen} =
  createMaterialBottomTabNavigator();
const PagesNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <TabNavigator
          barStyle={{backgroundColor: colors.PRIMARY}}
          initialRouteName="Rentals">
          <TabScreen
            options={{
              tabBarIcon: () => (
                <Icon
                  name="truck"
                  type="feather"
                  style={{fontSize: '16px', color: '#08c'}}
                  theme="outlined"
                />
              ),
            }}
            name="Cabs"
            component={CabNavigator}
          />
          <TabScreen
            options={{
              tabBarIcon: () => (
                <Icon
                  name="car-rental"
                  type="materialicons"
                  style={{fontSize: '16px', color: '#08c'}}
                  theme="outlined"
                />
              ),
            }}
            name="Rentals"
            component={RentalNavigator}
          />
          <TabScreen
            options={{
              tabBarIcon: () => (
                <Icon
                  name="more-vertical"
                  type="feather"
                  style={{fontSize: '16px', color: '#08c'}}
                  theme="outlined"
                />
              ),
            }}
            name="More"
            component={Profile}
          />
        </TabNavigator>
      </NavigationContainer>
    </>
  );
};
export default PagesNavigator;
