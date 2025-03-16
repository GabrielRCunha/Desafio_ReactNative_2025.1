import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0d0d0d",
    },
    
    content:{
        alignItems: "center"
    },

    title:{
        color: "white",
        fontSize: 24,
        fontFamily: "RockSalt",
        marginTop: 100,
        marginRight: 20,
        marginLeft: 20,
        textAlign: "center",
        marginBottom: 50
    },

    loginBox:{
        width: "80%",
        borderRadius: 20,
        backgroundColor: "#3B3B3B",
        alignItems: "center"
    },

    logo:{
        marginBottom: 20
    }, 

    inputEmail:{
        width: "80%",
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
        padding: 12,
        marginBottom: 40
    },

    inputSenha:{
        width: "80%",
        height: 40,
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
        padding: 12,
        marginBottom: 40
    },

    login:{
        width: 150,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#c49d6e",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },

    loginText:{
        color: "white",
        fontFamily: "RockSalt",
    }
})