import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import * as Notifications from "expo-notifications";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { buscarEnderecoPorCep } from "../services/viaCepService";

export default function CheckoutScreen({ navigation, carrinho, temaEscuro }) {
  const insets = useSafeAreaInsets();

  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("Cartão de Crédito");
  const [erro, setErro] = useState("");
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);
  const [cep, setCep] = useState("");

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  async function enviarNotificacao(titulo, corpo) {
    await Notifications.scheduleNotificationAsync({
      content: { title: titulo, body: corpo },
      trigger: null,
    });
  }

  async function buscarCep() {
    try {
      setErro("");
      const dados = await buscarEnderecoPorCep(cep);
      setEndereco(
        `${dados.logradouro}, ${dados.bairro} - ${dados.localidade} - ${dados.uf}`
      );
    } catch (error) {
      setErro(error.message);
    }
  }

  async function finalizarPedido() {
    if (endereco.trim() === "" || pagamento.trim() === "") {
      setErro("Preencha endereço e método de pagamento.");
      return;
    }

    setErro("");
    setPedidoFinalizado(true);

    await enviarNotificacao(
      "Pedido confirmado",
      "Seu pedido foi recebido e está sendo preparado."
    );

    setTimeout(() => {
      Alert.alert("Sucesso", "Pedido finalizado com sucesso!");
      navigation.navigate("Pedidos");
    }, 1500);
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#121212" : "#F7F7F7" },
      ]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={[
            styles.titulo,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          Checkout
        </Text>

        <Text
          style={[
            styles.subtitulo,
            { color: temaEscuro ? "#A0A0A0" : "#636E72" },
          ]}
        >
          Revise seu pedido
        </Text>

        {carrinho.map((item) => (
          <View
            key={item.id}
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
                styles.cardText,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              {item.nome}
            </Text>

            <Text
              style={[
                styles.info,
                { color: temaEscuro ? "#A0A0A0" : "#636E72" },
              ]}
            >
              Quantidade: {item.quantidade}
            </Text>

            <Text
              style={[
                styles.info,
                { color: temaEscuro ? "#A0A0A0" : "#636E72" },
              ]}
            >
              Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
            </Text>
          </View>
        ))}

        <Text
          style={[
            styles.total,
            { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
          ]}
        >
          Total: R$ {total.toFixed(2)}
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
          placeholder="Digite o CEP"
          placeholderTextColor={temaEscuro ? "#A0A0A0" : "#636E72"}
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.botaoCep} onPress={buscarCep}>
          <Text style={styles.textoBotao}>Buscar Endereço pelo CEP</Text>
        </TouchableOpacity>

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
              color: temaEscuro ? "#E0E0E0" : "#2D3436",
              borderColor: temaEscuro ? "#333333" : "#636E72",
            },
          ]}
          placeholder="Endereço"
          placeholderTextColor={temaEscuro ? "#A0A0A0" : "#636E72"}
          value={endereco}
          onChangeText={setEndereco}
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
          placeholder="Pagamento"
          placeholderTextColor={temaEscuro ? "#A0A0A0" : "#636E72"}
          value={pagamento}
          onChangeText={setPagamento}
        />

        {erro !== "" && <Text style={styles.erro}>{erro}</Text>}
      </ScrollView>

      <View
        style={[
          styles.footer,
          { paddingBottom: insets.bottom > 0 ? insets.bottom + 10 : 20 },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.botao,
            {
              backgroundColor: pedidoFinalizado
                ? "#20BF55"
                : temaEscuro
                ? "#1C3665"
                : "#FF6B35",
            },
          ]}
          onPress={finalizarPedido}
        >
          <Text style={styles.textoBotao}>
            {pedidoFinalizado ? "Pedido Confirmado!" : "Finalizar Pedido"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 100,
  },

  footer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },

  cardText: {
    fontWeight: "bold",
  },

  info: {
    marginTop: 5,
  },

  total: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
  },

  input: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
  },

  botaoCep: {
    backgroundColor: "#0984E3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  botao: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
  },

  erro: {
    color: "#FF3B30",
    marginTop: 5,
  },
});