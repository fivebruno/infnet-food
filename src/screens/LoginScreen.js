import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen({ setUsuarioLogado, temaEscuro }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    if (email.trim() === "" || senha.trim() === "") {
      setErro("Preencha e-mail e senha.");
      return;
    }

    setErro("");
    Alert.alert("Sucesso", "Login realizado com sucesso!");
    setUsuarioLogado(true);
  }

  return (
    <View
      style={[
        styles.containerCenter,
        { backgroundColor: temaEscuro ? "#121212" : "#F7F7F7" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
        ]}
      >
        Tela de Login
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
            color: temaEscuro ? "#E0E0E0" : "#2D3436",
            borderColor: temaEscuro ? "#333333" : "#636E72",
          },
        ]}
        placeholder="Digite seu e-mail"
        placeholderTextColor={temaEscuro ? "#A0A0A0" : "#636E72"}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
            color: temaEscuro ? "#E0E0E0" : "#2D3436",
            borderColor: temaEscuro ? "#333333" : "#636E72",
          },
        ]}
        placeholder="Digite sua senha"
        placeholderTextColor={temaEscuro ? "#A0A0A0" : "#636E72"}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      {erro !== "" && <Text style={styles.errorText}>{erro}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: temaEscuro ? "#1C3665" : "#FF6B35" },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },

  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});