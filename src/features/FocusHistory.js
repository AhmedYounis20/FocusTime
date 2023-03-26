import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CustomStyle } from "../styles/customStyle";
import { colors } from "../utils/colors";
import { fontSize, spacing } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";
export const FocusHistory = ({ history,clearHistory }) => {

    const renderItem = ({ item }) => (<View style={styles.item}><Text style={styles.itemText}>{item}</Text></View>);
    if (history ==null || history.length==0) return null;
    return (
        <View style={CustomStyle.container}>
            <View style={styles.textView}>
                <Text style={styles.title}>things we've focused on:</Text>
            </View>
            <View style={styles.historyView} >
                <FlatList
                    renderItem={renderItem}
                    data={history} style={styles.historyList} />

            </View>
            <View style={styles.clearButton}>
            <RoundedButton label="clear" onPress={clearHistory}  size={75}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    item: {
        alignItems: "flex-start",
        backgroundColor: "rgba(200,20,200,0.7)",
        flex: 1,
        borderRadius: 30,
        padding: 20,
        marginTop: 20

    },
    itemText: {
        fontSize: fontSize.md,
    },
    title: {
        color: colors.white,
        fontSize: fontSize.xl
    },
    historyList: {
        margin: 5,
    },
    historyView: {
        backgroundColor: "rgba(10,83,100,0.9)",
        flex:1,
    },
    textView: {
         margin: 20
    },
    clearButton:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
});