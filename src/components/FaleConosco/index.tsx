import {View, Text} from "react-native";
import { Phone, InstagramLogo, Envelope } from "phosphor-react-native";
import {styles} from "./styles";

export function FaleConosco(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale conosco</Text>
            <View style={styles.numTelefone}>
                <Phone color="white" size={30} />
                <Text style={styles.number}>(32) 99999 - 9999</Text>
            </View>
            <View style={styles.email}>
                <Envelope color="white" size={30}/>
                <Text style={styles.mailAddress}>sixstrings@gmail.com</Text>
            </View>
        </View>
    )
}