import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Countdown } from "../components/CountDown";
import { CustomStyle } from "../styles/customStyle";
export const Timer = ({ focusSubject }) => {

    return (
        <View style={CustomStyle.container}>
            <View style={styles.countDown}>
            <Countdown isPaused  onProgress={()=>{}} onEnd={()=>{}}/>
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
countDown:{
    alignItems:"center",
    flex:0.5,
    justifyContent:"center",
}
});