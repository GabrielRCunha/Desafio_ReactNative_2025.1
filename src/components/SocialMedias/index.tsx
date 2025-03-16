import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react-native";

export function SocialMedias(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Siga-nos em nossas redes sociais</Text>
            <View style={styles.medias}>
                <TouchableOpacity style={styles.facebook}><FacebookLogo color="#183CCA" size={40}/></TouchableOpacity>
                <TouchableOpacity style={styles.twitter}><TwitterLogo color="white" size={40}/></TouchableOpacity>
                <TouchableOpacity><InstagramLogo color="#C12B8A" size={40}/></TouchableOpacity>
            </View>
        </View>
    )
}