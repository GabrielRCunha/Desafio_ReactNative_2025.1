import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0d0d0d"
    },

    title:{
        width: "100%",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },

    textTitle:{
        color: "white",
        fontFamily: "RockSalt",
        fontSize: 20
    },

    searchAdd:{
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },

    search:{
        width: 200,
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 40,
        marginLeft: 20
    },

    addButton:{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#d9d9d9",
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 0
    },

    addText:{
        fontSize: 32,
        color: "#D72638",
        position: "absolute"
    }
})