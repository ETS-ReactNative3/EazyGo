import React, {useState} from 'react';
import Login from './pages/Login';
import colors from './assets/theme.colors';
import Home from './pages/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-elements';
import FlashMessage from 'react-native-flash-message';
import {
  DefaultTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import AppNavigator from './Navigators/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator: TabNavigator, Screen: TabScreen} =
  createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  const fontConfig = {
    android: {
      bold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal',
      },
      regular: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Montserrat-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Montserrat-Light',
        fontWeight: 'normal',
      },
      semiBold: {
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: 'normal',
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      fonts: configureFonts(fontConfig),
      blueBg1: '#3DA6E6',
      whiteBg2: '#FFFFFF',
      textColor: '#47525E',
      flatBtn: '#3a52bc',
      textInputColor: '#FFFFFF',
      labelColor: '#FFFFFF',
      primary: '#3751bc',
      text: '#3751bc',
    },
  };
  const logIN = true;
  return (
    <>
      <PaperProvider theme={theme}>
        {/* {logIN ? (
          <NavigationContainer>
            <TabNavigator barStyle={{backgroundColor: colors.PRIMARY}}>
              <TabScreen name="Home" component={Home} />
              <TabScreen name="Settings" component={Login} />
              <TabScreen name="Profile" component={Login} />
            </TabNavigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )} */}
        <AppNavigator />
        <FlashMessage position="top" />
      </PaperProvider>
    </>
  );
};

export default App;
