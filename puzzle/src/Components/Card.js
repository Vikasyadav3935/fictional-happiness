import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
 

const windowWidth = Dimensions.get('window').width;
export default function Card({ text }) {
  return (
    
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fca',
    borderRadius: 5,
    padding: 20,
    margin: 10,
  
    elevation: 10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:.5,
    width:windowWidth-20
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color:'#191',
    fontWeight:'bold'
  },
});
