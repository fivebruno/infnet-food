import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CarrinhoScreen({ carrinho, navigation, temaEscuro }) {
  const total = carrinho.reduce(
    (acumulador, item) => acumulador + item.preco * item.quantidade,
    0
  );

  return (
    <SafeAreaView
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
        Carrinho de Compras
      </Text>

      {carrinho.length === 0 ? (
        <Text
          style={[
            styles.subtitle,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Seu carrinho está vazio.
        </Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
                    borderLeftColor: temaEscuro ? "#1C3665" : "#FF6B35",
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
                    styles.detailText,
                    { color: temaEscuro ? "#A0A0A0" : "#636E72" },
                  ]}
                >
                  Quantidade: {item.quantidade}
                </Text>

                <Text
                  style={[
                    styles.detailText,
                    { color: temaEscuro ? "#A0A0A0" : "#636E72" },
                  ]}
                >
                  Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                </Text>
              </View>
            )}
          />

          <View
            style={[
              styles.totalBox,
              { backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF" },
            ]}
          >
            <Text
              style={[
                styles.totalText,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              Total: R$ {total.toFixed(2)}
            </Text>
          </View>

          <View style={styles.rodapeCheckout}>
            <TouchableOpacity
              style={[
                styles.botaoCheckout,
                { backgroundColor: temaEscuro ? "#1C3665" : "#20BF55" },
              ]}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.botaoCheckoutTexto}>Ir para Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
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
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  detailText: {
    fontSize: 16,
    marginTop: 8,
  },

  totalBox: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  rodapeCheckout: {
    paddingTop: 10,
    paddingBottom: 20,
  },

  botaoCheckout: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },

  botaoCheckoutTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});