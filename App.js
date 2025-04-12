import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const converterTemperatura = (valor, setResultado) => {
  const celsius = parseFloat(valor);
  if (isNaN(celsius)) {
    setResultado('Insira um número válido.');
    return;
  }
  const fahrenheit = (celsius * 9/5) + 32;
  setResultado(`${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`);
};

const converterVelocidade = (valor, setResultado) => {
  const kmh = parseFloat(valor);
  if (isNaN(kmh)) {
    setResultado('Insira um número válido.');
    return;
  }
  const mph = kmh * 0.621371;
  setResultado(`${kmh.toFixed(2)} km/h = ${mph.toFixed(2)} mph`);
};

const App = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Conversão</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um valor"
        placeholderTextColor="#aaa"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={() => converterTemperatura(valor, setResultado)}>
        <Text style={styles.buttonText}>Converter para °F</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => converterVelocidade(valor, setResultado)}>
        <Text style={styles.buttonText}>Converter para mph</Text>
      </TouchableOpacity>
      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default App;
