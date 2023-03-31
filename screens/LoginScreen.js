import { Alert, Image, ImageBackground, Modal, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../components/Themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigation = useNavigation();

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

  const login = (() => {
    if ((usuario === 'pablo' && contraseña === 'pablo') || (usuario === 'admin' && contraseña === 'admin')) {
      Alert.alert("Login", "Bienvenido: " + usuario)
      navigation.navigate('PerfilScreen')
    } else {
      Alert.alert("Login", "Usuario y contrasenia incorrecto")
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Escribe su usuario aqui"
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        value={contraseña}
        onChangeText={setContraseña}
        placeholder="Escribe tu contraseña aquí"
        style={styles.input}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

    </View>
  )
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
    backgroundColor: '#87CEFA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});