import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function PedidoScreen({ temaEscuro }) {
  const pedidos = [
    { id: "1", nome: "Pedido #013", status: "Pronto para entrega", total: 159.9 },
    { id: "2", nome: "Pedido #014", status: "Preparando", total: 159.9 },
    { id: "3", nome: "Pedido #015", status: "Preparando", total: 19.9 },
    { id: "4", nome: "Pedido #019", status: "Aguardando pagamento", total: 39.9 },
    { id: "5", nome: "Pedido #022", status: "Cancelado", total: 59.9 },
  ];

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
        Meus pedidos
      </Text>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
                borderLeftColor: temaEscuro ? "#1C3665" : "#FF6B35",
                borderColor: temaEscuro ? "#333333" : "#E0E0E0",
              },
            ]}
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
                styles.status,
                { color: temaEscuro ? "#A0A0A0" : "#636E72" },
              ]}
            >
              {item.status}
            </Text>

            <Text
              style={[
                styles.total,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              R$ {item.total.toFixed(2)}
            </Text>
          </View>
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
    marginBottom: 20,
    fontWeight: "bold",
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

  status: {
    fontSize: 14,
    marginTop: 5,
  },

  total: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
});