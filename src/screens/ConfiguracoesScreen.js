import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConfiguracoesScreen({ temaEscuro, setTemaEscuro }) {
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
        Configurações
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
            styles.subtitulo,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Tema atual: {temaEscuro ? "Escuro" : "Claro"}
        </Text>

        <TouchableOpacity
          style={[
            styles.botao,
            { backgroundColor: temaEscuro ? "#1C3665" : "#FF6B35" },
          ]}
          onPress={() => setTemaEscuro(!temaEscuro)}
        >
          <Text style={styles.botaoTexto}>
            Trocar para tema {temaEscuro ? "claro" : "escuro"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "center",
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },

  botao: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});