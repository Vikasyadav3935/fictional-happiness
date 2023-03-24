import { View, Text,StyleSheet, FlatList } from 'react-native'
import React ,{useState}from 'react'
import Card from '../Components/Card';
import { paheli } from '../Components/Data';
import { ThemedButton } from "react-native-really-awesome-button";

const Puzzle = () => {

 const [tog,setTog]=useState(false);
 
  


  return (
    <View style={styles.view}>
      <Text style={{marginTop:20,fontSize:30,color:'#a1f',fontWeight:'800'}}>मजेदार पहेली</Text>
     
     <FlatList
       
       data={paheli}
        horizontal
       renderItem={({item})=>(
        <View>
           <Card text={item.title}/>
        <ThemedButton name="bruce" type="secondary" style={styles.main} onPress={()=>setTog(true)} >
      <Text style={{fontSize:20,fontWeight:'800',color:'#a4f'}}> उत्तर {tog?':'+item.ans:''}</Text>   
      </ThemedButton>
        </View>
       
       )}
       pagingEnabled
       keyExtractor={el=>el.id}
    
     />
      
     
    </View>
      
  )
}

export default Puzzle;

const styles=StyleSheet.create({
  view:{
    backgroundColor:'#abb444',
    flex:1,alignItems:'center'
  },
  main:{
   marginBottom:80,
   alignSelf:'center',
   
   
  }
})