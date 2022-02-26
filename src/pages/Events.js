import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';
import {Card} from 'react-native-paper';
import ladahk from '../assets/images/events/ladahk.jpg';
import spiti from '../assets/images/events/spiti.jpg';
import valaparai from '../assets/images/events/valaparai.jpg';

const Events =()=>{
    const upcoming=[
        {
            eventtitle:'Ladakh Calling - Ladakh',
            date:'30th March,2022',
            desc:'Adventurous ride over the beautiful hills of Ladakh - Dream destination for many travel lovers',
            img:ladahk,
        },
        {
            eventtitle:'Forest Safari - Valaparai(TN)',
            date:'15th April,2022',
            desc:'Safari ride through the 7th heaven, majestically with Green Spread Mountains and picturesque forest all around',
            img:valaparai,
        }
    ];
    const past=[
        {
            eventtitle:'Snowy Hill - Spiti Valley(HP)',
            date:'19th December,2021',
            desc:'Spiti, a place like no other. Sheer adventure, the raw beauty of nature, and the endless cold desert',
            img:spiti,
        }
    ];
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          margin: 10,
          textAlign: 'center',
        },
        pgtitle:{
            
            textAlign: 'center',
            backgroundColor: 'black',
            fontSize: 18,
            marginTop: 10,
            color: 'white',
            padding: 10,
              
        },
        sidetitle:{
            backgroundColor: 'grey',
            fontSize: 14,
            marginVertical: 10,
            color: 'white',
            padding: 10,
              
        },
        box: {
          flex: 2,
          padding: 10,
          margin: 10,
          borderRadius: 20,
        },
        heading: {
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
          padding: 5,
          fontWeight: 'bold',
        },
        heading2: {
            color: 'black',
            fontSize: 16,
            padding: 5,
            fontWeight: 'bold',
          },
        body: {
          color: 'black',
          fontSize: 15,
          padding: 5,
        },
        img:{
            width:'100%'
        },
      });
    return (
        <>
          <Text style={styles.pgtitle}>
                Events & Tours 
          </Text>
          <Text style={styles.sidetitle}>Upcoming Tours</Text>
          <ScrollView
            style={[
              styles.container,
              {
                flexDirection: 'column',height:'75%',
              },
              
            ]}>
                {upcoming.map((e)=>{
                    return <Card style={styles.box}>
                                <Text style={styles.heading}>{e.eventtitle}</Text>
                                <Text style={styles.heading2}>{e.date}</Text>
                                <Image style = {styles.img} source={e.img} />
                                <Text style={styles.body}>
                                {e.desc}
                                </Text>
                                
                            </Card>
                })}
        
           </ScrollView>
           <Text style={styles.sidetitle}>Past Tours</Text>
           <ScrollView
            style={[
              styles.container,
              {
                flexDirection: 'column',
              },
            ]}>
                {past.map((e)=>{
                    return <Card style={styles.box}>
                                <Text style={styles.heading}>{e.eventtitle}</Text>
                                <Text style={styles.heading2}>{e.date}</Text>
                                <Image style={styles.img} source={e.img} />
                                <Text style={styles.body}>
                                {e.desc}
                                </Text>
                            </Card>
                })}
                        
            </ScrollView>
        </>);

}
export default Events;