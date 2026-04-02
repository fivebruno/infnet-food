import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { WebView } from "react-native-webview";

export default function MapaScreen({ navigation, temaEscuro }) {
  const restaurantes = [
    {
      id: "1",
      nome: "Comilança",
      endereco: "Av. Alm. Barroso, 97 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Prato Executivo",
    },
    {
      id: "2",
      nome: "Ouvidor Gourmet",
      endereco: "R. do Ouvidor, 148 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Risoto de Camarão",
    },
    {
      id: "3",
      nome: "Koni",
      endereco: "R. S. José, 66 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Temaki de Salmão",
    },
    {
      id: "4",
      nome: "Singular",
      endereco: "R. da Quitanda, 49 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Hambúrguer Artesanal",
    },
    {
      id: "5",
      nome: "Grão Raro Café",
      endereco: "R. Rodrigo Silva, 18 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Cappuccino",
    },
    {
      id: "6",
      nome: "KFC",
      endereco: "R. S. José, 82 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Balde de Frango",
    },
    {
      id: "7",
      nome: "Burger King",
      endereco: "Av. Rio Branco, 102 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Whopper",
    },
    {
      id: "8",
      nome: "McDonalds",
      endereco: "R. Buenos Aires, 201 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Big Mac",
    },
    {
      id: "9",
      nome: "Restaurante Nova B & C",
      endereco: "R. do Rosário, 152 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "PF Completo",
    },
    {
      id: "10",
      nome: "Zanetti Grill",
      endereco: "R. do Rosário, 142 - Centro, Rio de Janeiro - RJ",
      itemCardapio: "Churrasco Misto",
    },
  ];

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background: ${temaEscuro ? "#121212" : "#FFFFFF"};
          }
          #map {
            height: 100vh;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([-22.9068, -43.1729], 14);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

          const restaurantes = [
            ["Comilança", -22.9060, -43.1740],
            ["Ouvidor Gourmet", -22.9055, -43.1750],
            ["Koni", -22.9070, -43.1730],
            ["Singular", -22.9080, -43.1720],
            ["Grão Raro Café", -22.9050, -43.1710],
            ["KFC", -22.9075, -43.1745],
            ["Burger King", -22.9065, -43.1760],
            ["McDonalds", -22.9085, -43.1770],
            ["Restaurante Nova B & C", -22.9045, -43.1725],
            ["Zanetti Grill", -22.90328785122462, -43.17920501885133]
          ];

          restaurantes.forEach(r => {
            L.marker([r[1], r[2]])
              .addTo(map)
              .bindPopup(r[0]);
          });
        </script>
      </body>
    </html>
  `;

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
        Mapa de Restaurantes
      </Text>

      <View
        style={[
          styles.mapaContainer,
          { borderColor: temaEscuro ? "#333333" : "#E0E0E0" },
        ]}
      >
        <WebView originWhitelist={["*"]} source={{ html }} />
      </View>

      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              {
                backgroundColor: temaEscuro ? "#1E1E1E" : "#FFFFFF",
                borderColor: temaEscuro ? "#333333" : "#E0E0E0",
              },
            ]}
            onPress={() =>
              navigation.navigate("DetalhesRestaurante", { restaurante: item })
            }
          >
            <Text
              style={[
                styles.nome,
                { color: temaEscuro ? "#E0E0E0" : "#2D3436" },
              ]}
            >
              {item.nome}
            </Text>

            <Text
              style={[
                styles.endereco,
                { color: temaEscuro ? "#A0A0A0" : "#636E72" },
              ]}
            >
              {item.endereco}
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  mapaContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    borderWidth: 1,
  },

  listaContainer: {
    paddingBottom: 20,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },

  endereco: {
    fontSize: 14,
  },
});