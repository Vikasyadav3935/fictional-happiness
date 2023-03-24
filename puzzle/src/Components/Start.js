import { View, Text } from 'react-native'
import React from 'react'

const Start = ({emoji,txt}) => {
  return (
   <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <View>
     <Text>{emoji}</Text>
    </View>
    <View>
        <Text>
        {txt}
        </Text>
    </View>
   </View>
  )
}

export default Start;