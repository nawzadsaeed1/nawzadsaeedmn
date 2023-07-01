import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyButton({onPress}) {
  return (
    
    <TouchableOpacity onPress={onPress}>
      <View className='bg-red-600 items-center h-12 justify-center rounded-3xl'>
        <Text className='text-white'>Follow </Text>  
          </View>
    </TouchableOpacity>      



  )
}