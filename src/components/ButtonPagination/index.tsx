import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles"

type numberProps = {
    number: String
}

export function ButtonPagination({number}: numberProps){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.number}>{number}</Text>
        </TouchableOpacity>
    )
}