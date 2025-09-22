import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatOption } from "../../components/BatOption/BatOption";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "numerico",
  ]);
  const [charCount, setCharCount] = useState(8);

  return (
    <View style={styles.appContainer}>
      <BatLogo />

      <BatOption
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        charCount={charCount}
        setCharCount={setCharCount}
      />

      <View style={styles.inputContainer}>
        <BatButton selectedOptions={selectedOptions} charCount={charCount} />
      </View>

      <StatusBar barStyle="light-content" />
    </View>
  );
}
