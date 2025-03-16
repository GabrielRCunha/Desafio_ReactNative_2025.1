import { Text, View } from "react-native";
import { styles } from "./styles";

type descriptionProps = {
    descricao: String
}

export function Description ({descricao}: descriptionProps){
    return (
        <View style={styles.container}>
            <Text style={styles.descriptionTitle}>Descrição</Text>
            <Text style={styles.descriptionText}>{descricao}</Text>
        </View>
    )
}