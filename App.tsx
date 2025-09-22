import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import Home from "./src/screens/Home/Home";



export default function App() {
  return (
    <ImageBackground
      source={require("../../Desafios/gerador-senhas/assets/background.jpg")} // caminho da imagem
      style={styles.background}
      resizeMode="cover"
    >
      <Home />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 1,
  },
});

