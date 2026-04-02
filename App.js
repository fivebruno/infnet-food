import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import AppNavigator from "./src/navigation/AppNavigator";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [temaEscuro, setTemaEscuro] = useState(false);

  useEffect(() => {
    async function configurarNotificacoes() {
      await Notifications.requestPermissionsAsync();
    }

    configurarNotificacoes();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        usuarioLogado={usuarioLogado}
        setUsuarioLogado={setUsuarioLogado}
        temaEscuro={temaEscuro}
        setTemaEscuro={setTemaEscuro}
      />
    </NavigationContainer>
  );
}