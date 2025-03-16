import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";



export function Navbar(){


    return (
        <View style={styles.navbar}>
            <TouchableOpacity >
                <Ionicons name="menu" size={32} color={"black"} style={styles.btnDrawer} />
            </TouchableOpacity>
            <Image source={require("../../../assets/images/logo.png")} style={styles.imgLogo} />
            <TouchableOpacity>
                <Ionicons name="search" size={32} color={"black"} style={styles.btnSearch} />
            </TouchableOpacity>
        </View>
    );
}