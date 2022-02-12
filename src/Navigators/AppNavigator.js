import React from 'react';
import PagesNavigator from './PagesNavigator';
import AuthNavigator from './AuthNavigator';
const AppNavigator = () => {
  const login = true;
  return <>{!login ? <AuthNavigator /> : <PagesNavigator />}</>;
};

export default AppNavigator;
