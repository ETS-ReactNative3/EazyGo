import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Card} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {Text, TouchableRipple} from 'react-native-paper';
import {format} from 'date-fns';
import SelectDropdown from 'react-native-select-dropdown';
import DocumentPicker from 'react-native-document-picker';
import {Icon} from 'react-native-elements';
import RNFS from 'react-native-fs';
import AuthStore from '../store/AuthStore';
import {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {BASE_URL} from '@env';
const RentYourCar = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const [upload, setUpload] = useState(false);
  const [filename, setFilename] = useState();
  const [file, setFile] = useState();
  const [truck, setTruck] = useState('');
  const [token, setToken, userLocation] = useContext(AuthStore);
  const vals = ['D-Max', 'S-Cab', 'muX', 'HiLander', 'V-Cross'];
  const entries = [
    {
      label: 'D-Max',
      value: 'dmax',
    },
    {
      label: 'S-Cab',
      value: 'scab',
    },
    {
      label: 'muX',
      value: 'mux',
    },
    {
      label: 'HiLander',
      value: 'hilander',
    },
    {
      label: 'V-Cross',
      value: 'vcross',
    },
  ];

  const docPicker = async () => {
    try {
      let res;
      res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFilename(res[0].name);
      setUpload(true);
      let base64 = await RNFS.readFile(res[0].uri, 'base64');
      setFile(base64);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  return (
    <>
      {userLocation ? (
        <ScrollView>
          <Button mode="contained">Rent Your Pickup Truck</Button>
          <Card style={{margin: 10}}>
            <Button
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginBottom: 20,
              }}>
              Rental Booking
            </Button>
            <Text
              style={{
                color: '#000',
                marginLeft: '10%',
                fontSize: 17,
                marginBottom: 10,
              }}>
              Rental From Date:
            </Text>
            <Button
              mode="outlined"
              style={{
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: '10%',
              }}
              onPress={() => setOpen(true)}>
              {format(date, 'dd-MM-yyyy   -   hh:mm')}
            </Button>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: '10%',
                fontSize: 17,
                marginBottom: 10,
                marginTop: 20,
              }}>
              Rental To Date:
            </Text>
            <Button
              mode="outlined"
              style={{
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: '10%',
                marginTop: 5,
                marginBottom: 20,
              }}
              onPress={() => setOpen1(true)}>
              {format(toDate, 'dd-MM-yyyy   -   hh:mm')}
            </Button>
            <DatePicker
              modal
              open={open1}
              date={toDate}
              onConfirm={date => {
                setOpen1(false);
                setToDate(date);
              }}
              onCancel={() => {
                setOpen1(false);
              }}
            />
            <Text
              style={{
                color: '#000',
                marginLeft: '10%',
                fontSize: 17,
                marginBottom: 10,
                marginTop: 20,
              }}>
              Pickup Truck Type:
            </Text>
            <TouchableRipple style={{marginLeft: '10%', marginBottom: 20}}>
              <SelectDropdown
                data={vals}
                onSelect={(selectedItem, index) => {
                  setTruck(entries[index].value);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </TouchableRipple>
            <TouchableOpacity style={styles.opac} onPress={docPicker}>
              {!upload ? (
                <>
                  <Text style={styles.textInput1}>
                    Upload Driving License...
                  </Text>
                  <Text style={styles.ico}>
                    <Icon name="upload" type="antdesign" size={32} />
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.textInput1}>{filename}</Text>
                  <Text style={styles.ico}>
                    <Icon name="edit" type="material" size={32} />
                  </Text>
                </>
              )}
            </TouchableOpacity>
            <Button
              mode="contained"
              style={{marginBottom: 20, width: '80%', marginHorizontal: '10%'}}
              onPress={async() => {
                const d1 = date.getTime();
                const d2 = toDate.getTime();
                if (d2 - d1 >= 7200000) {
                  const req = {
                    from: date,
                    to: toDate,
                    type: truck,
                    location: userLocation,
                    //license: file,
                  };
                  const config = {
                    headers:{
                      "Authorization" : token,
                      "Content-Type" : 'application/json'
                    }
                  }
                  const response = await axios.post(BASE_URL+'rent/post_rent',req,config);
                } else {
                  showMessage({
                    message: 'Duration must be atleast 2 Hours',
                    type: 'danger',
                    style: {
                      alignItems: 'center',
                    },
                  });
                }
              }}>
              Rent
            </Button>
          </Card>
        </ScrollView>
      ) : null}
    </>
  );
};

export default RentYourCar;

const styles = StyleSheet.create({
  opac: {
    borderRadius: 5,
    borderWidth: 1,
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'black',
    color: 'black',
    marginHorizontal: '10%',
    marginBottom: 20,
  },
  ico: {
    textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    padding: 6,
  },
  textInput1: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40,
    borderColor: 'black',
    color: 'black',
  },
});
