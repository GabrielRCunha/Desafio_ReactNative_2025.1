import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 20
    },

    imgProduct:{
        width: 300,
        height: 300,
        marginBottom: 20
    },

    titleProduct:{
        color: "white",
        fontSize: 15
    },

    informations:{
        textAlign: "left",
        width: 300,
        height: 70,
        justifyContent: "space-between",
        marginBottom: 30
    },

    priceProduct:{
        color: "white",
        fontSize: 20
    },

    btnAdd:{
        backgroundColor: "#E85D04",
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    },

    textBtnAdd:{
        color: "white",
        fontFamily: "RockSalt"
    }
})