import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { styles } from './styles';
type ImageButtonProps = {
    imageSource: ImageSourcePropType;
    text: string;
    onPress?: () => void;
};

export function Categorias({imageSource, text, onPress}: ImageButtonProps) {
  return (
    <TouchableOpacity style={styles.divBotao} onPress={onPress}>
      <View style={styles.botao}>
        <Image
          source={imageSource}
          style={styles.imgBotao}
        />
      </View>
      <Text style={styles.textoBotao}>{text}</Text>
    </TouchableOpacity>
  );
};

