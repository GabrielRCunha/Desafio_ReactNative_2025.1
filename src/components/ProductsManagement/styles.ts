import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 20
    },

    content:{
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },

    image:{
        width: 168,
        height: 168,
        marginRight: 10
    },

    informations:{
        flexDirection: "column"
    },

    title:{
        color: "white",
        fontSize: 16,
        width: 180,
        marginBottom: 20
    },

    priceTitle:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5
    },

    price:{
        color: "white",
        fontSize: 16
    },

    modals:{
        marginLeft: 20,
        flexDirection: "row"
    },

    delete:{
        marginRight: 10
    },

    textDelete: {
        color: "#ff0000"
    },

    barra:{
        color: "#d9d9d9",
        marginRight: 10
    },

    edit:{
        color: "#0000ff"
    }

})