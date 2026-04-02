import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetalhesRestauranteScreen({ route, temaEscuro }) {
  const { restaurante } = route.params;

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
        Detalhes dos Restaurantes
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
            borderColor: temaEscuro ? "#333333" : "#E0E0E0",
          },
        ]}
      >
        <Text
          style={[
            styles.nome,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          {restaurante.nome}
        </Text>

        <Text
          style={[
            styles.info,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Localização: {restaurante.endereco}
        </Text>

        <Text
          style={[
            styles.info,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Cardápio: {restaurante.itemCardapio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    fontSize: 15,
    marginBottom: 8,
  },
});