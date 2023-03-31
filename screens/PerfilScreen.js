import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function Container() {
  const showCredentialsAlert = () => {
    Alert.alert(
      'Título del alert',
      'Este es un mensaje de alerta.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('Alerta OK'),
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    showCredentialsAlert();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileName}>MACENA</Text>
      </View>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Mostrar credenciales</Text>
        <FontAwesome name="chevron-right" size={16} color="#0000ff" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notificaciones</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 20,
    padding: -10,
    borderRadius: 0
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileInfo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  link: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
  titleContainer: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
