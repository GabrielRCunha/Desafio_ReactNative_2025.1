import { Text, View, Image, ImageSourcePropType, TouchableOpacity }  from "react-native";
import { styles } from "./styles";

type props = {
    titulo: String;
    preco: String;
    imagem: ImageSourcePropType;
    onPress?: () => void;
}

export function Product({titulo, preco, imagem, onPress}: props){
    return(
        <View style={styles.container} >
            <Image source={imagem} style={styles.imgProduct} />
            <View style={styles.informations}>
                <Text style={styles.titleProduct}>{titulo}</Text>
                <Text style={styles.priceProduct}>R${preco}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.btnAdd}>
                <Text style={styles.textBtnAdd}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}