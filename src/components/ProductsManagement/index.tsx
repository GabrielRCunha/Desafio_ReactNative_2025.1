import {View, Text, Image, ImageSourcePropType, TouchableOpacity} from "react-native";
import {styles} from "./styles";



type productProps = {
    title: String;
    price: String;
    image: ImageSourcePropType;
}

export function ProductsManagement({title, price, image}: productProps){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={image} style={styles.image}/>
                <View style={styles.informations}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.priceTitle}>Preço</Text>
                    <Text style={styles.price}>R$ {price}</Text>
                </View>
            </View>
            <View style={styles.modals}>
                <TouchableOpacity style={styles.delete}>
                    <Text style={styles.textDelete}>Excluir item</Text>
                </TouchableOpacity>
                <Text style={styles.barra}>|</Text>
                <TouchableOpacity><Text style={styles.edit}>Editar informações</Text></TouchableOpacity>
            </View>
        </View>
    )
}