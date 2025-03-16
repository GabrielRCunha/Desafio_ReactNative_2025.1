import { View, Text } from "react-native";
import {styles} from "./styles";
import { ButtonPagination } from "../ButtonPagination";

export function Pagination(){
    return(
        <View style={styles.container}>
            <ButtonPagination
                number={"<"}
            />
            <ButtonPagination
                number={"1"}
            />
            <ButtonPagination
                number={"2"}
            />
            <ButtonPagination
                number={"3"}
            />
            <ButtonPagination
                number={"4"}
            />
            <ButtonPagination
                number={"5"}
            />
            <ButtonPagination
                number={">"}
            />
        </View>
    )
}