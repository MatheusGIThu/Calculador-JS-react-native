import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native-web";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState(null);
  const [operador, setOperador] = useState("");

  function Calcular() {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Valores inválidos");
      return;
    }

    let resultado;
    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num2 === 0 ? "Divisão por zero" : num1 / num2;
        break;
      default:
        resultado = "Escolha um operador";
    }
    setResult(resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.calculo}>
        {n1} {operador} {n2}
      </Text>

      <View style={styles.inputLeft}>
        <TextInput
          style={styles.input}
          placeholder="Primeiro Número"
          keyboardType="numeric"
          onChangeText={setN1}
          value={n1}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Segundo Número"
          keyboardType="numeric"
          onChangeText={setN2}
          value={n2}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.opButton}>
          <Button
            title="+"
            onPress={() => setOperador("+")}
            color={operador === "+" ? "#4CAF50" : "#555"}
          />
        </View>
        <View style={styles.opButton}>
          <Button
            title="-"
            onPress={() => setOperador("-")}
            color={operador === "-" ? "#4CAF50" : "#555"}
          />
        </View>
        <View style={styles.opButton}>
          <Button
            title="*"
            onPress={() => setOperador("*")}
            color={operador === "*" ? "#4CAF50" : "#555"}
          />
        </View>
        <View style={styles.opButton}>
          <Button
            title="/"
            onPress={() => setOperador("/")}
            color={operador === "/" ? "#4CAF50" : "#555"}
          />
        </View>
      </View>

      <View style={styles.calculateButton}>
        <Button title="Calcular" onPress={Calcular} color="#007bff" />
      </View>

      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    height: 40,
    width: 150,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  inputLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
    marginBottom: 25,
  },
  opButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  calculateButton: {
    width: "10%",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
  },
  result: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  calculo: {
    fontSize: 22,
    marginBottom: 20,
    color: "#444",
  },
});
