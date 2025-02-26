import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.fundo}>
      <View style={styles.containerScroll}>
        <Text style={styles.titulo}>SixStrings</Text>
        <View style={styles.card1}>
          <Image source={require('../../assets/images/fundoCard1.png')} style={styles.fundoCard1}/>
            <Text style={styles.textoCard1}>Aproveite as{'\n'}melhores ofertas</Text>
        </View>
        <View style={styles.card2}>
          <Image source={require('../../assets/images/fundoCard2.png')} style={styles.fundoCard2} />
          <Text style={styles.textoCard2}>Modelos mais populares</Text>
        </View>
        <View style={styles.card3}>
          <Image source={require('../../assets/images/fundoCard3.png')} style={styles.fundoCard3}/>
          <Text style={styles.textoCard3}>Novidades na loja</Text>
        </View>
      </View>
      <View style={styles.categorias}>
        <Text style={styles.textoCategorias}>Categorias</Text>
        <View style={styles.botoesCategorias}>
          <View style={styles.divBotao1}>
            <View style={styles.botao1}></View>
            <Text style={styles.textoBotao1}>Amplificadores</Text>
          </View>
          <View style={styles.divBotao2}>
            <View style={styles.botao2}></View>
            <Text style={styles.textoBotao2}>Elétricas</Text>
          </View>
          <View style={styles.divBotao3}>
            <View style={styles.botao3}></View>
            <Text style={styles.textoBotao3}>Acústicas</Text>
          </View>
        </View>
      </View>
      <View style={styles.novosItens}>
        <Text style={styles.tituloItens}>Novos itens</Text>
        <View style={styles.cardsItens}>
          <View style={styles.cardItem2}></View>
          <View style={styles.cardItem1}>
            <Image style={styles.imgCard1} source={require('../../assets/images/stratocaster.png')} />
            <Text style={styles.textoItem1}>Guitarra elética Fender stratocaster preta</Text>
            <Text style={styles.precoItem1}>R$ 1859,00</Text>
            <Text style={styles.avaliacaoItem1}>⭐4.6</Text>
            <View style={styles.botaoCardItem1}>
              <Text style={styles.textoBotaoItem1}>COMPRAR</Text>
            </View>
          </View>
          <View style={styles.cardItem3}></View>
        </View>
      </View>
      <View style={styles.sobre}>
        <Text style={styles.tituloSobre}>Sobre</Text>
        <Text style={styles.conteudoSobre}>A SixStrings é uma loja virtual de instrumentos musicais e afins com foco em violões e guitarras
           elétricas que tem como visão que vocês, músicos nunca parem de tocar e produzire possam sempre ter seu equipamento a alguns cliques
            de distância. VIVA A MÙSICA!!!</Text>
      </View>
      <View style={styles.logoPaginaInicial}>
        <Image source={require('../../assets/images/logo.png')}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  titulo: {
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20,
    color: "#C49D6E",
    fontFamily: "RockSalt",
    textAlign: "center",
  },

  containerScroll: {
    flex: 1,
    fontFamily: "RockSalt",
    fontSize: 30,
    alignItems: "center",
  },

  texto: {
    fontFamily: "RockSalt",
  },

  card1: {
    height: 180,
    width: "90%",
    backgroundColor: "#E85D04",
    borderRadius: 15,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },

  textoCard1: {
    fontFamily: "RockSalt",
    width: "70%",
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    opacity: 1,
    position: "absolute"
  },

  fundoCard1: {
    width: "50%",
    height: "85%",
    opacity: 0.8
  },

  fundo: {
    backgroundColor: "#0d0d0d",
  },

  card2: {
    height: 180,
    width: "90%",
    backgroundColor: "#D72638",
    borderRadius: 15,
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },

  textoCard2: {
    fontSize: 20,
    fontFamily: "RockSalt",
    position: "absolute"
  },

  fundoCard2: {
    width: "100%",
    height: "100%",
    opacity: 0.7
  },

  card3: {
    height: 180,
    width: "90%",
    backgroundColor: "#3B3B3B",
    borderRadius: 15,
    marginBottom: 40,
    flex: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  textoCard3: {
    fontFamily: "RockSalt",
    fontSize: 20,
    color: "#E85D04",
    position: "absolute"
  },

  fundoCard3: {
    width: "60%",
    height: "100%",
    opacity: 0.7
  },

  categorias: {
    flex: 0
  },

  textoCategorias: {
    fontFamily: "RockSalt",
    color: "#C49D6E",
    fontSize: 25,
    marginLeft: 15
  },

  botoesCategorias: {
    flex: 0,
    flexDirection: "row"
  },

  divBotao1: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10
  },

  botao1: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#A8A8A8",    
  },

  textoBotao1: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "RockSalt"
  },

  divBotao2: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 30
  },

  botao2: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#A8A8A8",
  },

  textoBotao2: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "RockSalt"
  },

  divBotao3: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10
  },

  botao3: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#A8A8A8",
  },

  textoBotao3: {
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "RockSalt"
  },

  novosItens: {
    flex: 0,
    flexDirection: "column"
  },

  tituloItens: {
    fontSize: 25,
    fontFamily: "RockSalt",
    color: "#C49D6E",
    marginLeft: 20
  },

  cardsItens: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },

  cardItem1: {
    height: 400,
    width: 250,
    backgroundColor: "#A8A8A8",
    padding: 20,
    marginBottom: 20,
    flex: 0,
    alignItems: "center",
    marginRight: 20
  },

  imgCard1: {
    width: 200,
    height: 200,
    marginBottom: 10
  },

  textoItem1: {
    width: 200,
    marginBottom: 5
  },

  precoItem1: {
    fontSize: 20,
    width: 200,
    marginBottom: 0
  },

  avaliacaoItem1: {
    fontSize: 20,
    fontFamily: "RockSalt",
    color: "#E0B62A",
    width: 200
  },

  botaoCardItem1: {
    width: 120,
    height: 30,
    backgroundColor: "#E85D04",
    borderRadius: 30,
    flex: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  textoBotaoItem1: {
    color: "#ffffff",
    fontSize: 15
  },

  cardItem2: {
    height: 400,
    width: 250,
    backgroundColor: "#A8A8A8",
    padding: 20,
    marginBottom: 20,
    flex: 0,
    alignItems: "center",
    marginRight: 20
  },

  cardItem3: {
    height: 400,
    width: 250,
    backgroundColor: "#A8A8A8",
    padding: 20,
    marginBottom: 20,
    flex: 0,
    alignItems: "center",
    marginRight: 20
  },

  sobre: {
    flex: 0,
    marginBottom: 20
  },

  tituloSobre: {
    fontFamily: "RockSalt",
    color: "#C49D6E",
    fontSize: 25,
    marginLeft: 20
  },
  
  conteudoSobre: {
    fontSize: 15,
    color: "#ffffff",
    width: "90%",
    marginLeft: 20
  },

  logoPaginaInicial: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 20
  },

});
