import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 60,
    
    
  },
  label: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    paddingVertical: 10,
    
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 6,
  },
  radioSelected: {
    backgroundColor: "#fdfa22ff",
  },
  radioText: {
    color: "#fff",
    fontSize: 18,
  },
  
});
