import { View, Text } from 'react-native'
import React,{createContext,useEffect,useState} from 'react';
import firestore from '@react-native-firebase/firestore';

 export const DataContext=createContext();


const Context = ({children}) => {

    const [paheli,setPaheli]=useState([]);

    useEffect(()=>{
        if(paheli.length==0){
          getPaheli();
         }
      },[])
    
    
      const getPaheli = () => {
        firestore()
          .collection('paheli')
          .get()
          .then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(documentSnapshot => {
              data.push(documentSnapshot.data());
            });
            setPaheli(data);
            // console.log(data)
      
          });
      };

  return (
    <DataContext.Provider value={{paheli}}>
        {children}
    </DataContext.Provider>
  )
}

export default Context;