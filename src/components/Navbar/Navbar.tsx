import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';



import { styles } from "./styles";



export function Navbar(){

    const navigation = useNavigation();


    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                <Ionicons name="menu" size={32} color={"black"} style={styles.btnDrawer} />
            </TouchableOpacity>
            <Image source={require("../../../assets/images/logo.png")} style={styles.imgLogo} />
            <TouchableOpacity>
                <Ionicons name="search" size={32} color={"black"} style={styles.btnSearch} />
            </TouchableOpacity>
        </View>
    );
}