import {View, Text} from "react-native";
import { styles } from "./styles";

export function OpeningHours(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horário de atendimento</Text>
            <View style={styles.horarios}>
                <Text style={styles.horariosSemana}>seg-sex: 9:00 às 18:00</Text>
                <Text style={styles.horariosFimDeSemana}>Sábado: 9:00 às 13:00</Text>
            </View>
        </View>
    )
}