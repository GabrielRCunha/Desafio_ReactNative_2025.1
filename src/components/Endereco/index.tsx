import {View, Text} from "react-native";
import {styles} from "./styles";
import { HouseLine } from "phosphor-react-native";

export function Endereco(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Endereco</Text>
            <View style={styles.endereco}>
                <HouseLine size={30} color="white"/>
                <Text style={styles.address}>Rua Esmeralda, 666, Vila dos Hobbits, Recife, Minas Gerais</Text>
            </View>
        </View>
    )
}