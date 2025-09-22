import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import * as Clipboard from "expo-clipboard";
import generatePass from "../../services/passwordService";

type BatButtonProps = {
  charCount: number; // tamanho da senha vindo do slider
  selectedOptions: string[]; // opções selecionadas no BatOption
};

export function BatButton({ charCount, selectedOptions }: BatButtonProps) {
  const [pass, setPas] = useState("");

  // Gera a senha usando os estados recebidos
  function handleGenerateButton() {
    const generateToken = generatePass({
      length: charCount,
      selectedOptions: selectedOptions,
    });
    setPas(generateToken);
  }

  // Copia a senha para a área de transferência
  function handlerCopyButton() {
    Clipboard.setStringAsync(pass);
    Alert.alert("Sucesso!", "Senha copiada para a área de transferência!");
  }

  // Limpa a senha
  function handlerLimparButton() {
    setPas("");
  }

  return (
    <View>
      <BatTextInput pass={pass} />

      <View style={styles.buttons}>
        <Pressable
          onPress={handleGenerateButton}
          style={[styles.button, styles.gerar]}
        >
          <Text style={styles.text}>GERAR</Text>
        </Pressable>

        <Pressable
          onPress={handlerCopyButton}
          style={[styles.button, styles.copiar]}
        >
          <Text style={styles.text}>COPIAR</Text>
        </Pressable>

        <Pressable
          onPress={handlerLimparButton}
          style={[styles.button, styles.limpar]}
        >
          <Text style={styles.text}>LIMPAR</Text>
        </Pressable>
      </View>
    </View>
  );
}
