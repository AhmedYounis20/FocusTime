import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration   } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { CustomStyle } from "../styles/customStyle";
import { colors } from "../utils/colors";
import { fontSize, spacing } from "../utils/sizes";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const ONE_Second_IN_MS = 1000;
const vibration_pattern = [
    ONE_Second_IN_MS,
    ONE_Second_IN_MS,
    ONE_Second_IN_MS,
    ONE_Second_IN_MS,
    ONE_Second_IN_MS,
    ONE_Second_IN_MS,
];
export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);
    useKeepAwake();
    const onEnd=(reset)=>{
        Vibration.vibrate(vibration_pattern);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }

    return (
        <View style={CustomStyle.container}>
            <View style={styles.countDownContainer}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={(progress) => { setProgress(progress) }} onEnd={onEnd} style={styles.countdown} />
            </View>
            <View style={styles.focus}>
                <Text style={[styles.text, styles.title]}>Focusing on</Text>
                <Text style={[styles.text, styles.task]}>{focusSubject}</Text>
            </View>
            <View style={{ margin: spacing.md }}>
                <ProgressBar progress={progress} color={"rgba(220,2,200,0.8)"} style={{ height: 10, borderRadius: 10 }} />
            </View>
            <View style={styles.timingWrapper}>
                <Timing onChangeTime={setMinutes} />
            </View>
            <View style={styles.buttonWrapper}>
                {
                    (isStarted) ?
                        (<RoundedButton label="pause" onPress={() => setIsStarted(false)} textStyle={styles.buttonText} />)
                        :
                        (<RoundedButton label="start" onPress={() => setIsStarted(true)} textStyle={styles.buttonText} />)
                }
            </View>
            <View style={{ flex: 0.1 }}>
                <View style={styles.clearSubjectView}>

                    <RoundedButton size={50} label="-" onPress={clearSubject} textStyle={styles.buttonText} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    countDownContainer: {
        alignItems: "center",
        flex: 0.3,
        justifyContent: "center",
        // backgroundColor:"red"

    },
    countdown: {
        borderRadius: 50,
        backgroundColor: "rgba(255,255,255,0.08)"
    },
    focus: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        marginBottom: 10,
        flex: 0.2,
    },
    timingWrapper: {
        flex: 0.15,
        justifyContent: "center"
    },
    buttonWrapper: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    buttonText: {
        fontSize: spacing.xl
    },
    text: {
        color: colors.white,
    },
    task: {
        fontSize: fontSize.md,
    },
    title: {
        fontWeight: "bold",
        fontSize: fontSize.lg,

    },
    clearSubjectView: {
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    clearButton: {
        flex: 0.1,
    }
});