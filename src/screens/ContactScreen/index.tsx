import { View, Text, ScrollView, Image } from "react-native";
import {styles} from "./styles";
import { FaleConosco } from "@/src/components/FaleConosco";
import { OpeningHours } from "@/src/components/OpeningHours";
import { Endereco } from "@/src/components/Endereco";
import { SocialMedias } from "@/src/components/SocialMedias";

export function ContactScreen(){
    return(
        <ScrollView style={styles.container}>
            <FaleConosco/>
            <OpeningHours/>
            <Endereco/>
            <SocialMedias/>
            <View style={styles.logo}>
                <Image source={require("../../../assets/images/logo.png")} />
            </View>
        </ScrollView>
    )
}