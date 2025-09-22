import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent:'space-between',
  },

  text: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
    fontWeight:600,
  },

  button: {
    alignItems: "center",
    width: 100,
    height:50,
    justifyContent: "center",
    paddingVertical: 12,

    borderRadius: 9,
    elevation: 3,
    backgroundColor: "black",
  },

  gerar:{
    backgroundColor:'green',
    
  },

  copiar:{
    backgroundColor:'gray',
  },

  limpar:{
    backgroundColor:'#858506ff',
  }
});