import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

function ContainerWithCloseButton({ navigation }) {
  const handleClose = () => {
    navigation.navigate('Inicio'); 
  };

  const handleDownload = () => {
    const url = 'https://mincyt.cba.gov.ar/wp-content/uploads/2022/11/PREGUNTAS-FRECUENTES-RECOR-1.pdf'; // Cambia esta URL por el enlace que desees abrir
    Linking.openURL(url);
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Preguntas Frecuentes</Text>
      <Text style={styles.text}>Tenemos las respuestas a la mayoría de tus preguntas en este documento:</Text>
      <TouchableHighlight style={styles.downloadButton} onPress={handleDownload} underlayColor="lightblue">
        <Text style={styles.buttonText}>Descargar</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white', // Fondo blanco
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContainerWithCloseButton;
