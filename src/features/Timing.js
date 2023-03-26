import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
export const Timing = ({ onChangeTime }) => (

    <View style={styles.timing}>
        <View style={styles.timingButton}>
            <RoundedButton size={75} label="10" onPress={() => onChangeTime(10)} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} label="20" onPress={() => onChangeTime(20)} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} label="30" onPress={() => onChangeTime(30)} />
        </View>
    </View>
);

const styles = StyleSheet.create({

    timing: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    timingButton: {
        flex: 1,
        alignItems:"center"
    }
});
