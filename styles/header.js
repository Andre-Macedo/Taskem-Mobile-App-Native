import { StyleSheet } from "react-native";
import colors from "../constants/Colors";
import layout from "../constants/Layout"
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        width: layout.window.width,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: colors.lightGreyColor,
        borderBottomWidth: RFValue(0.8),
        paddingTop: RFValue(40),
        paddingBottom: RFValue(12)
    },
    logo: {
        width: RFValue(120),
        marginLeft: RFValue(16),
        resizeMode: "contain"
    },
    viewLogOut: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
    },
    logOut: {
        width: RFValue(30),
        height: RFValure(30),
        marginRight: RFValue(16)
    },
    textName: {
        fontSize: RFValue(14),
        color: colors.primaryColor,
        marginRight: RFValue(10),
        fontWeight: "bold"
    }

})