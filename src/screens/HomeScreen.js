import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import categorias from "../data/categorias";

export default function HomeScreen({ navigation, temaEscuro }) {
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
        InfnetFood
      </Text>

      <Text
        style={[
          styles.subtitulo,
          { color: temaEscuro ? "#A0A0A0" : "#636E72" },
        ]}
      >
        Categorias disponíveis
      </Text>

      <TouchableOpacity
        style={styles.botaoCarrinho}
        onPress={() => navigation.navigate("Carrinho")}
      >
        <Text style={styles.botaoCarrinhoText}>Ir para o Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoPerfil}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.botaoPerfilText}>Ir para o Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoPedido}
        onPress={() => navigation.navigate("Pedidos")}
      >
        <Text style={styles.botaoPedidoTexto}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoMapa}
        onPress={() => navigation.navigate("Mapa")}
      >
        <Text style={styles.botaoMapaTexto}>Ver Mapa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botaoConfiguracoes,
          { backgroundColor: temaEscuro ? "#1C3665" : "#636E72" },
        ]}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <Text
          style={[
            styles.botaoConfiguracoesTexto,
            { color: temaEscuro ? "#E0E0E0" : "#FFFFFF" },
          ]}
        >
          Configurações
        </Text>
      </TouchableOpacity>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
                borderLeftColor: temaEscuro ? "#1C3665" : "#FF6B35",
                borderColor: temaEscuro ? "#333333" : "#E0E0E0",
              },
            ]}
            onPress={() => navigation.navigate("Produtos", { categoria: item })}
          >
            <Text
              style={[
                styles.cardText,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              {item.nome}
            </Text>
          </TouchableOpacity>
        )}
      />
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

  botaoCarrinho: {
    backgroundColor: "#20BF55",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoCarrinhoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoPerfil: {
    backgroundColor: "#0984E3",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoPerfilText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoPedido: {
    backgroundColor: "#FF9F43",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoPedidoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoMapa: {
    backgroundColor: "#0984E3",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoMapaTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoConfiguracoes: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  botaoConfiguracoesTexto: {
    fontSize: 16,
    fontWeight: "bold",
  },

  listaContainer: {
    paddingBottom: 20,
  },

  card: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderWidth: 1,
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});