import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PerfilScreen({ temaEscuro }) {
  const usuario = {
    nome: "Cidcley Schmitt de Oliveira",
    email: "cidcley.oliveira@prof.infnet.edu.br",
  };

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
        Perfil do Usuário
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
            styles.label,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Nome
        </Text>

        <Text
          style={[
            styles.value,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          {usuario.nome}
        </Text>

        <Text
          style={[
            styles.label,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          E-mail
        </Text>

        <Text
          style={[
            styles.value,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          {usuario.email}
        </Text>
      </View>
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

  card: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
  },

  label: {
    fontSize: 14,
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});