import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './Navigators/AppNavigator';

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
      blueBg1: '#3DA6E6',
      whiteBg2: '#FFFFFF',
      textColor: '#47525E',
      flatBtn: '#3a52bc',
      textInputColor: '#FFFFFF',
      labelColor: '#FFFFFF',
      primary: '#000',
      text: '#000',
    },
  };

  return (
    <>
      <PaperProvider theme={theme}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PaperProvider>
    </>
  );
};

export default App;
