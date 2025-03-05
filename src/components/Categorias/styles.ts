import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    divBotao: {
        flex: 0,
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10
    },

    botao: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: "#d9d9d9",  
        flex: 0,
        justifyContent: "center",
        alignItems: "center" 
    },

    imgBotao: {
        width: 110,
        height: 110,
        margin: 0,
        padding: 0,    
    },

    textoBotao: {
        fontSize: 15,
        color: "#FFFFFF",
        fontFamily: "RockSalt"
    },
});