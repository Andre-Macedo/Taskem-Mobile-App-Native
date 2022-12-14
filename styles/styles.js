import { StyleSheet } from "react-native";
import colors from "../constants/Colors";

import loginStyles from "./login"
import headerStyles from "./header"
import filterStyles from './filters';
import listStyles from './list';
import footerStyles from './footer';
import itemStyles from './listItem';

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerTop: {
        justifyContent: "flex-start"
    },
    horizontalView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    errorMsg: {
        fontFamily: "Roboto",
        textAlign: "center",
        color: colors.errorColor,
        fontWeight: "bold"
    },
    inputSelect: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: RFValue(16),
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        minWidth: RFValue(220),
        backgroundColor: "transparent",
        fontFamily: 'biennale-regular',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: RFValue(1),
        borderColor: colors.mediumGreyColor,
    }
});



export { defaultStyles, loginStyles, headerStyles, filterStyles, listStyles, footerStyles, itemStyles };