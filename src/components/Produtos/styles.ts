import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardItem: {
        height: 400,
        width: 250,
        backgroundColor: "#A8A8A8",
        padding: 20,
        marginBottom: 20,
        flex: 0,
        alignItems: "center",
        marginRight: 20
    },
    
    imgCard: {
        width: 200,
        height: 200,
        marginBottom: 10
    },
    
    textoItem: {
        width: 200,
        marginBottom: 5
    },
    
    precoItem: {
        fontSize: 20,
        width: 200,
        marginBottom: 0
    },

    botaoCardItem: {
        width: 120,
        height: 30,
        backgroundColor: "#E85D04",
        borderRadius: 30,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
      },
    
      textoBotaoItem: {
        color: "#ffffff",
        fontSize: 15
      }
    
})