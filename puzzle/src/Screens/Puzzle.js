import {View, Text, StyleSheet, FlatList,Dimensions} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import Card from '../Components/Card';
import {paheli} from '../Components/Data';
import {ThemedButton} from 'react-native-really-awesome-button';

const Puzzle = ({route}) => {
  const {itemId} = route.params;
  const [tog, setTog] = useState(0);
  const [current,setCurrent]=useState(itemId);
  const slider=useRef(null);

  const ITEM_HEIGHT = Dimensions.get('window').width;
useEffect(()=>{
 handleScrollToIndex(current-1)
},[tog])
const handleScrollToIndex=(index)=>{
  if (index >= 0 && index < paheli.length) {
    slider.current.scrollToIndex({
      index,
      viewOffset: 0,
      animated: true,
    });
}
}

 const getItemLayout=(data, index) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
})
  const handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;
    const currentPage = Math.floor(offsetX / pageWidth) + 1;

    // handleScrollToIndex(currentPage - 1);
    console.log(currentPage);
    setCurrent(currentPage);
  };




  return (
    <View style={styles.view}>
      {/* <Text
        style={{marginTop: 20, fontSize: 30, color: '#a1f', fontWeight: '800'}}>
        मजेदार पहेली
      </Text> */}

      <FlatList
        data={paheli}
        ref={slider}
        horizontal
        renderItem={({item}) => (
          <View>
            <Text
        style={{marginTop: 20, fontSize: 30, color: '#a1f', fontWeight: '800',alignSelf:'center'}}>
        मजेदार पहेली -{item.id}
      </Text>
            <Card text={item.title} />
            <ThemedButton
              name="bruce"
              type="pintrest"
              style={styles.main}
              onPress={() => {item.show=true
               setTog(current)
              }}>
              <Text style={{fontSize: 20, fontWeight: '800', color: '#a4f'}}>
                {' '}
                उत्तर {item.show ? ':' + item.ans : ''}
              </Text>
            </ThemedButton>
          </View>
        )}
        pagingEnabled
        keyExtractor={el => el.id}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        getItemLayout={getItemLayout}

      />
    </View>
  );
};

export default Puzzle;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fbb444',
    flex: 1,
    alignItems: 'center',
  },
  main: {
    marginBottom: 80,
    alignSelf: 'center',
  },
});
