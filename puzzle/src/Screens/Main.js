import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {DataContext} from './Context';

const Main = ({navigation}) => {
  const {paheli} = useContext(DataContext);

  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={'#aaa444'} />
      <View
        style={{
          marginTop: 40,
          backgroundColor: '#fbf00044',
          width: '105%',
          elevation: 5,
        }}>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            marginTop: 8,
            color: 'black',
            fontWeight: '600',
          }}>
          पहेलियाँ
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={paheli}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Puzzle', {itemId: item.id})}>
              <Text style={styles.txt}>
                {item.id}. {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={el => el.id}
          ListEmptyComponent={<ActivityIndicator size="large" color="#393" />}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#faa444',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#393',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 15,
    elevation: 4,
    width: '97%',
    alignSelf: 'center',
    height: 40,
  },
});
