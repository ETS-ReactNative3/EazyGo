import React, {useState} from 'react';
import Login from './pages/Login';
//import { Provider as PaperProvider } from 'react-native-paper';
import {DefaultTheme, configureFonts,Provider as PaperProvider} from 'react-native-paper';
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
  }

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors:{
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
    }
  }
  return (
    <>
      <PaperProvider theme={theme}>
        <Login/>
      </PaperProvider>
    </>
  );
};

export default App;
