import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Alert } from 'react-native';
import { Text, View } from "../components/Themed";

export default function PregFrecScreen() {
  const [consulta, setConsulta] = useState("");

  const enviarConsulta = () => {
    // Aquí podrías agregar la lógica para enviar la consulta
    console.log("Consulta enviada:", consulta);

    // Mostrar la alerta de confirmación
    Alert.alert(
      'Consulta enviada',
      '¡Gracias por contactarnos!',
      [{ text: 'OK', onPress: () => console.log('Alerta cerrada') }]
    );

    setConsulta("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Con que podemos ayudarte?</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* Agregar el formulario */}
      <TextInput
        value={consulta}
        onChangeText={setConsulta}
        placeholder="Escribe tu consulta aquí"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={enviarConsulta}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});