import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from "./BatLogoStyles";
import batLogo from '../../../assets/Key.png';

export function BatLogo() {
  return (
    <View style={styles.inicioLogo}>
        <Text style={styles.title}>GERADOR DE SENHAS</Text>
        <Image source={batLogo}/>
    </View>
  );
}