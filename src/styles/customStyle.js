import { StyleSheet, Platform, StatusBar } from "react-native";
import {colors} from "../utils/colors";
export const CustomStyle = StyleSheet.create({
    container:{
        flex:1
    },
    mainContainer:{
        backgroundColor: colors.darkblue,
        paddingTop : Platform.OS==="android" ? StatusBar.currentHeight:0,
    }
});