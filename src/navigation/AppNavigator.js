import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProdutosScreen from "../screens/ProdutosScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import CarrinhoScreen from "../screens/CarrinhoScreen";
import PerfilScreen from "../screens/PerfilScreen";
import PedidosScreen from "../screens/PedidosScreen";
import MapaScreen from "../screens/MapaScreen";
import DetalhesRestauranteScreen from "../screens/DetalhesRestauranteScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ConfiguracoesScreen from "../screens/ConfiguracoesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator({
  carrinho,
  setCarrinho,
  usuarioLogado,
  setUsuarioLogado,
  temaEscuro,
  setTemaEscuro,
}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: temaEscuro ? "#1C3665" : "#FF6B35",
        },
        headerTintColor: "#FFFFFF",
      }}
    >
      {!usuarioLogado ? (
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              setUsuarioLogado={setUsuarioLogado}
              temaEscuro={temaEscuro}
            />
          )}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScreen
                {...props}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Produtos">
            {(props) => (
              <ProdutosScreen
                {...props}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Detalhes">
            {(props) => (
              <DetalhesScreen
                {...props}
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Carrinho">
            {(props) => (
              <CarrinhoScreen
                {...props}
                carrinho={carrinho}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Checkout">
            {(props) => (
              <CheckoutScreen
                {...props}
                carrinho={carrinho}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Perfil">
            {(props) => (
              <PerfilScreen
                {...props}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Pedidos">
            {(props) => (
              <PedidosScreen
                {...props}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Mapa">
            {(props) => (
              <MapaScreen
                {...props}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="DetalhesRestaurante">
            {(props) => (
              <DetalhesRestauranteScreen
                {...props}
                temaEscuro={temaEscuro}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Configuracoes">
            {(props) => (
              <ConfiguracoesScreen
                {...props}
                temaEscuro={temaEscuro}
                setTemaEscuro={setTemaEscuro}
              />
            )}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}