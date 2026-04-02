import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DetalhesScreen({
  route,
  navigation,
  carrinho,
  setCarrinho,
  temaEscuro,
}) {
  const { produto } = route.params;

  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function adicionarAoCarrinho() {
    const itemExistente = carrinho.find((item) => item.id === produto.id);

    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade }]);
    }

    setAdicionado(true);

    setTimeout(() => {
      setAdicionado(false);
      navigation.navigate("Carrinho");
    }, 1500);
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#121212" : "#F7F7F7" },
      ]}
    >
      <Text
        style={[
          styles.titulo,
          { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
        ]}
      >
        Detalhes do Produto
      </Text>

      <View
        style={[
          styles.detalhesCard,
          {
            backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
            borderColor: temaEscuro ? "#333333" : "#E0E0E0",
          },
        ]}
      >
        <Text
          style={[
            styles.textoCard,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          {produto.nome}
        </Text>

        <Text
          style={[
            styles.textoDetalhes,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Preço: R$ {produto.preco.toFixed(2)}
        </Text>

        <Text
          style={[
            styles.textoDetalhes,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Categoria: {produto.categoria}
        </Text>
      </View>

      <Text
        style={[
          styles.subtitulo,
          { color: temaEscuro ? "#A0A0A0" : "#636E72" },
        ]}
      >
        Quantidade
      </Text>

      <View style={styles.containerQuantidade}>
        <TouchableOpacity
          style={[
            styles.botaoQuantidade,
            { backgroundColor: temaEscuro ? "#1C3665" : "#FF6B35" },
          ]}
          onPress={diminuirQuantidade}
        >
          <Text style={styles.botaoQuantidadeTexto}>-</Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.textoQuantidade,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          {quantidade}
        </Text>

        <TouchableOpacity
          style={[
            styles.botaoQuantidade,
            { backgroundColor: temaEscuro ? "#1C3665" : "#FF6B35" },
          ]}
          onPress={aumentarQuantidade}
        >
          <Text style={styles.botaoQuantidadeTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.botao,
          {
            backgroundColor: adicionado
              ? "#20BF55"
              : temaEscuro
              ? "#1C3665"
              : "#FF6B35",
          },
        ]}
        onPress={adicionarAoCarrinho}
      >
        <Text style={styles.botaoTexto}>
          {adicionado ? "Adicionado!" : "Adicionar ao Carrinho"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  titulo: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  detalhesCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
  },

  textoCard: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textoDetalhes: {
    fontSize: 16,
    marginTop: 8,
  },

  containerQuantidade: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  botaoQuantidade: {
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  botaoQuantidadeTexto: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  textoQuantidade: {
    fontSize: 22,
    marginHorizontal: 20,
    fontWeight: "bold",
  },

  botao: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});