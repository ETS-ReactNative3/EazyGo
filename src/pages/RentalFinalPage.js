import {format} from 'date-fns';
import React from 'react';
import {Button} from 'react-native-paper';
const RentalFinalBill = ({navigation, route}) => {
  const {from, to} = route && route.params;
  console.log(from, to);
  return (
    <>
      <Button mode="contained">Rental Bill</Button>
      <Button style={{marginTop: 10}}>
        From : {format(from, 'dd-MM-yyyy  -  hh:mm:ss')}
      </Button>
      <Button style={{marginTop: 10}}>
        To : {format(to, 'dd-MM-yyyy  -  hh:mm:ss')}
      </Button>
    </>
  );
};

export default RentalFinalBill;
