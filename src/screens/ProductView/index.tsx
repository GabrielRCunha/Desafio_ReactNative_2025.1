import { View, Text, ScrollView, SafeAreaView, Image, ImageBackground, TouchableOpacity, Button } from "react-native";
import React from 'react';
import { styles } from './styles';
import { Product } from "@/src/components/Product";
import { Description } from "@/src/components/Description";



export function ProductView() {
    return(
        <ScrollView>
            <View style={styles.container}>
            <Product
            titulo={"Guitarra elétrica Fender stratocaster preta"}
            preco={"1859,00"}
            imagem={require("../../../assets/images/stratocaster.png")}
            />
            <Description
            descricao={"Guitarra stratocaste da marca Fender, modelo MS-212. Nova. Acompanha alavanca, cordas de espessura 0.12. Modelo para destros."}
            />
            </View>
        </ScrollView>
    )
}