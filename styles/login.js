import { StyleSheet } from "react-native";
import colors from "../constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontSize: RFValue(32)
    },
    form: {
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        marginBottom: RFValue(40),
        width: RFValue(260),
        height: RFValue(62),
        resizeMode: "contain"
    },

    inputView: {
        padding: RFValue(10)
    },
    icon: {
        width: RFValue(20),
        resizeMode: "contain",
        marginTop: RFValue(-10),
        marginRight: RFValue(10),
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginBottom: RFValue(12),
        fontSize: RFValue(16),
        display: "flex",
        alignItems: "center",
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        width: RFValue(240),
        borderRadius: 0,
        paddingBottom: 0,

        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: colors.mediumGreyColor,
        borderBottomWidth: RFValue(1),
    },
    button: {
        width: RFValue(260),
        height: RFValue(40),
        marginTop: RFValue(15),
        marginBottom: RFValue(11),
        backgroundColor: colors.primaryColor,
        borderRadius: RFValue(20),
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: colors.whiteColor,
        fontSize: RFValue(17),
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },

});
