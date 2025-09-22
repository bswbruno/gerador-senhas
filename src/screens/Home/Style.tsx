import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#201f1fbc",
    alignItems: "center", // centraliza horizontalmente
    justifyContent: "flex-start", // alinha elementos de cima para baixo
    paddingTop: 50,
  },

  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },

  inputContainer: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles