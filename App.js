import React,{useState} from 'react';
import { StyleSheet, Text, View , StatusBar , SafeAreaView } from 'react-native';
import { Focus } from './src/features/Focus';
import { RoundedButton } from './src/components/RoundedButton';
import { colors } from './src/utils/colors';
import { CustomStyle } from './src/styles/customStyle';
import { Timer } from './src/features/Timer';
export default function App() {
  const [currentSubject,setCurrentSubject]= useState(null);
  return (
    <SafeAreaView style={[CustomStyle.container,CustomStyle.mainContainer]}>
      {!currentSubject ?
      (<Focus addSubject={setCurrentSubject}/> )
      : 
      (
      <Timer 
      focusSubject={currentSubject} 
      onTimerEnd ={()=>{}}
      clearSubject ={()=>{}}    
          />
          )
}
    </SafeAreaView>
  );
}
