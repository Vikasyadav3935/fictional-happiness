import { View, Text ,StyleSheet,TouchableOpacity,StatusBar, FlatList} from 'react-native'
import React from 'react';
import { paheli } from '../Components/Data';


const Main = ({navigation}) => {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor={'#aaa444'}/>
      <View style={{marginTop:20}}>
        {/* <TouchableOpacity style={styles.btn} 
        // onPress={()=>navigation.navigate('Puzzle')}
        >
        <Text></Text>
        <Text style={styles.txt}>मजेदार पहेलियाँ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
        <Text></Text>
        <Text style={styles.txt}>स्तर</Text>
        </TouchableOpacity> */}

        <FlatList
         
         data={paheli}

         renderItem={({item})=>(
          <TouchableOpacity style={styles.btn}
          onPress={()=>navigation.navigate('Puzzle')}
          >
          
          <Text style={styles.txt}>{item.id}. {item.title}</Text>
          </TouchableOpacity>

         )}
         keyExtractor={el=>el.id}
        
        />

       
      </View>
    </View>
  )
}

export default Main;

const styles=StyleSheet.create({
  view:{
     backgroundColor:'#aaa444',
     flex:1,
     justifyContent:'center',
     alignItems:'center',

  },
  txt:{
    color:'white',
    fontSize:18

  },
  btn:{
    backgroundColor:'#333',
    flexDirection:'row',
    paddingHorizontal:15,
    paddingVertical:8,
    borderRadius:5,marginBottom:15,
    elevation:4,
    width:'97%',
    alignSelf:'center',
    height:40,
  }
})