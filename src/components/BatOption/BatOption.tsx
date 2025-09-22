import React from "react";
import { View, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { styles } from "./BatOptionStyle";

type BatOptionProps = {
  selectedOptions: string[];
  setSelectedOptions: (opts: string[]) => void;
  charCount: number;
  setCharCount: (n: number) => void;
};

export function BatOption({
  selectedOptions,
  setSelectedOptions,
  charCount,
  setCharCount,
}: BatOptionProps) {
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleValueChange = (value: number) => {
    setCharCount(Math.round(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione os formatos da senha:</Text>

      <View style={styles.radioContainer}>
        {["numerico", "letras", "simbolo"].map((option) => (
          <Pressable
            key={option}
            style={styles.radioButton}
            onPress={() => toggleOption(option)}
          >
            <View
              style={[
                styles.radioCircle,
                selectedOptions.includes(option) && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioText}>
              {option === "numerico"
                ? "Numérico"
                : option === "letras"
                ? "Letras"
                : "Símbolo"}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Quantidade de Caracteres: {charCount}</Text>

      <Slider
        minimumValue={4}
        maximumValue={16}
        step={1}
        value={charCount}
        onValueChange={handleValueChange}
        onSlidingComplete={(v) => setCharCount(Math.round(v))}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#888"
      />

      <Text style={styles.label}>
        Selecionados: {selectedOptions.join(", ") || "nenhum"}
      </Text>
    </View>
  );
}
