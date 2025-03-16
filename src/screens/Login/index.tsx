import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import {styles} from "./styles";

export function Login(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Faça login para acessar a loja</Text>
                <View style={styles.loginBox}>
                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    <TextInput style={styles.inputEmail} placeholder="Insira seu e-mail" />
                    <TextInput style={styles.inputSenha} placeholder="Insira sua senha"/>
                    <TouchableOpacity style={styles.login}><Text style={styles.loginText} >Entrar</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}