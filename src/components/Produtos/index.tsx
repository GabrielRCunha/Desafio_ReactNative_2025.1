import React from "react";
import { Image, View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type produtoProps = {
    preco: String;
    titulo: String;
    imagem: ImageSourcePropType;
    onPress?: () => void;
};

export function Produtos({preco, titulo, imagem, onPress}: produtoProps) {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={onPress}>
      <View>
        <Image
          style={styles.imgCard}
          source={imagem}
        />
        <Text style={styles.textoItem}>
          {titulo}
        </Text>
        <Text style={styles.precoItem}>R$ {preco}</Text>
      </View>
      <View style={styles.botaoCardItem}>
        <Text style={styles.textoBotaoItem}>COMPRAR</Text>
      </View>
    </TouchableOpacity>
  );
}
