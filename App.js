import { View, Text, Image, Button, TouchableOpacity, Alert, StatusBar } from 'react-native'
import React from 'react'
import MyButton from './components/MyButton';

export default function App() {
  const man = require('./assets/man.png')

  function mn()
  {
    alert("Hello!");
  }


  return (
    <View className='bg-slate-800 m-3 p-3 space-y-2'>

      <View className='flex-row items-center space-x-2'>
      <Image className='w-24 h-24 rounded-full' source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHkVK5dzppscSCffwlfoxWPqiM5z-H_Yrig&usqp=CAU'}} />
      <Text className='text-white text-base'>Aryas Application</Text>
      </View>


<View>
<MyButton onPress={()=>{
  Alert.alert("For Sure","Are You Women",
  [
    {
      text:"Yes",
      onPress:()=>{alert("I Know that hahahah")}
    },
    {
      text:"Cancle",
      onPress:()=>{alert("Oh, it means you are Women ")}
    }
  ])
}} />

</View>

  
  <StatusBar backgroundColor="red"  />



    </View>
 
 
 
  )
}