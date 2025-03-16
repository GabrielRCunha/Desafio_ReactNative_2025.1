import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import {styles} from "./styles";
import { ProductsManagement } from "@/src/components/ProductsManagement";
import { Pagination } from "@/src/components/Pagination";

export function Management(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>Lista de produtos</Text>
            </View>
            <View style={styles.searchAdd}>
                <TextInput style={styles.search}/>
                <TouchableOpacity style={styles.addButton}><Text style={styles.addText}>+</Text></TouchableOpacity>
            </View>
            <ProductsManagement
                image={require("../../../assets/images/stratocasterSunburst.png")}
                title={"Menphis stratocaster Sunburst MG-30"}
                price={"1.695,00"}
            />
            <ProductsManagement
                image={require("../../../assets/images/lesPaulKit.png")}
                title={"Kit guitarra elétrica Strinberg Les Paul Cherry..."}
                price={"1.759,00"}
            />
            <ProductsManagement
                image={require("../../../assets/images/violaoGianninni.png")}
                title={"Violão acústico preto - Gianninni N-14BK"}
                price={"464,39"}
            />
            <ProductsManagement
                image={require("../../../assets/images/capotraste.png")}
                title={"Capotraste para guitarra e violão aço CT3"}
                price={"18,98"}
            />
            <ProductsManagement
                image={require("../../../assets/images/ampMeteoro.png")}
                title={"Cubo amplificador de guitarra Meteoro Space J..."}
                price={"722,00"}
            />

            <Pagination/>
        </ScrollView>
    )
}