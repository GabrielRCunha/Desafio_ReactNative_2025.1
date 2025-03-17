import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { useState, useContext } from "react";
import { styles } from "./styles";
import { Routes } from "@/src/routes";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "@/src/contexts/auth";

export function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { signIn } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleLogin = () => {
        signIn(email, senha, navigation);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Faça login para acessar a loja</Text>
                <View style={styles.loginBox}>
                    <Image source={require("../../../assets/images/logo.png")} style={styles.logo} />
                    
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.inputSenha}
                        placeholder="Insira sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.login} onPress={handleLogin}>
                        <Text style={styles.loginText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
