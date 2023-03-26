import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Focus } from './src/features/Focus';
import { RoundedButton } from './src/components/RoundedButton';
import { colors } from './src/utils/colors';
import { CustomStyle } from './src/styles/customStyle';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';
export default function App() {

  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  
  return (
    <SafeAreaView style={[CustomStyle.container, CustomStyle.mainContainer]}>
      {!currentSubject ?
        (
          <>
            <View style={[styles.focus]}>
              <Focus addSubject={setCurrentSubject} />
            </View>
            <FocusHistory history={history} />
          </>
        )
        :
        (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject)=>{
              setHistory([...history,subject]);
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  focus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },


});
