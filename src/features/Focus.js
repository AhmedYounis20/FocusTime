import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { CustomStyle } from "../styles/customStyle";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { fontSize, spacing } from "../utils/sizes";
export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);
    console.log(subject);
    return (
        <View style={CustomStyle.container}>
            <View style={styles.inputcontainer}>
                <TextInput onChangeText={setSubject} label={"what would you like to focus on 🤔?!"} style={styles.textInput} />
                <View style={styles.button}>
                <RoundedButton label="+" size={spacing.xxl} onPress={()=>addSubject(subject)} />
                </View>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    inputcontainer: {
        padding: spacing.lg,
        justifyContent: "center",
        flexDirection:"row",
        
    },
    button:{
        justifyContent:"center"
    },
    textInput: {
        color: colors.white,
        flex:1,
        marginRight:spacing.sm,
        fontSize:fontSize.md,
        borderRadius:spacing.sm,
    },
});