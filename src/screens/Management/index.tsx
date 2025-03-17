import { ScrollView, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { produtos } from "../../../assets/data/Db.js";
import { useState, useEffect } from "react";
import {styles} from "./styles";
import { ProductsManagement } from "@/src/components/ProductsManagement";
import { Navbar } from "@/src/components/Navbar/Navbar";


export function Management(){

    return(
        
        <>
            <Navbar/>
            <ScrollView style={styles.container}>
                <View style={styles.modal}>
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Lista de produtos</Text>
                </View>
                <View style={styles.searchAdd}>
                    <TextInput style={styles.search}/>
                    <TouchableOpacity style={styles.addButton}><Text style={styles.addText}>+</Text></TouchableOpacity>
                </View>
                <FlatList
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    const img = `@/assets/images/${item.imagem}`;


                    return <ProductsManagement
                        title={item.nome}
                        price={item.preco}
                        image={item.imagem}
                    />
                    }}
                >

                </FlatList>

            </ScrollView>
        </>
    )
}