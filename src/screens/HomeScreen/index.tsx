import { View, Text, ScrollView, SafeAreaView, Image, ImageBackground, TouchableOpacity, Button, FlatList } from "react-native";
import React from 'react';
import { styles } from './styles';
import { Categorias } from '../../components/Categorias';
import { Produtos } from "@/src/components/Produtos";
import { Navbar } from "@/src/components/Navbar/Navbar";
import { useNavigation } from "@react-navigation/native";
import {produtos} from "../../../assets/data/Db.js";


export function Home({}) {

  const categorias = [
    { id: '1', image: require('../../../assets/images/amplificador.png'), text: 'Amplificadores' },
    { id: '2', image: require('../../../assets/images/guitarra.png'), text: 'Elétricas' },
    { id: '3', image: require('../../../assets/images/violao.png'), text: 'Acústicas' },
    { id: '4', image: require('../../../assets/images/acessorios.png'), text: 'Acessórios' },
  ];

  const navigation = useNavigation();

  function handleItemPage(){
    navigation.navigate('product');
  }
  function handleManagemantPage(){
    navigation.navigate('management');
  }
  return (
    <>
    <Navbar/>
    <ScrollView style={styles.fundo}>
      
      <View style={styles.containerScroll}>
        <Text style={styles.titulo}>SixStrings</Text>
        <View style={styles.card1}>
          <Image source={require('../../../assets/images/fundoCard1.png')} style={styles.fundoCard1}/>
            <Text style={styles.textoCard1}>Aproveite as{'\n'}melhores ofertas</Text>
        </View>
        <View style={styles.card2}>
          <Image source={require('../../../assets/images/fundoCard2.png')} style={styles.fundoCard2} />
          <Text style={styles.textoCard2}>Modelos mais populares</Text>
        </View>
        <View style={styles.card3}>
          <Image source={require('../../../assets/images/fundoCard3.png')} style={styles.fundoCard3}/>
          <Text style={styles.textoCard3}>Novidades na loja</Text>
        </View>
      </View>
      <View style={styles.categorias}>
        <Text style={styles.textoCategorias}>Categorias</Text>
        <FlatList 
          horizontal
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Categorias
              imageSource={item.image}
              text={item.text}
              onPress={() => console.log(`Você clicou em ${item.text}`)}
            />
          )}
        />
      </View>
      <View style={styles.novosItens}>
        <Text style={styles.tituloItens}>Novos itens</Text>
        <View style={styles.cardsItens}>
          <FlatList
            horizontal={true}
            data={produtos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <Produtos
                preco={item.preco}
                titulo={item.nome}
                imagem={item.imagem}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.sobre}>
        <Text style={styles.tituloSobre}>Sobre</Text>
        <Text style={styles.conteudoSobre}>A SixStrings é uma loja virtual de instrumentos musicais e afins com foco em violões e guitarras
           elétricas que tem como visão que vocês, músicos nunca parem de tocar e produzire possam sempre ter seu equipamento a alguns cliques
            de distância. VIVA A MÙSICA!!!</Text>
      </View>
      <View style={styles.logoPaginaInicial}>
        <Image source={require('../../../assets/images/logo.png')}/>
      </View>
    </ScrollView>
    
    </>
  );
}