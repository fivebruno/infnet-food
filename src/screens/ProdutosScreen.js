import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import produtos from "../data/produtos";

export default function ProdutosScreen({ route, navigation, temaEscuro }) {
  const { categoria } = route.params;

  const produtosFiltrados = produtos.filter(
    (item) => item.categoria === categoria.nome
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#121212" : "#F7F7F7" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
        ]}
      >
        Produtos
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: temaEscuro ? "#A0A0A0" : "#636E72" },
        ]}
      >
        {categoria.nome}
      </Text>

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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
            onPress={() => navigation.navigate("Detalhes", { produto: item })}
          >
            <Text
              style={[
                styles.cardText,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              {item.nome}
            </Text>

            <Text
              style={[
                styles.priceText,
                { color: temaEscuro ? "#A0A0A0" : "#636E72" },
              ]}
            >
              R$ {item.preco.toFixed(2)}
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

  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  listContainer: {
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

  priceText: {
    fontSize: 16,
    marginTop: 8,
  },
});