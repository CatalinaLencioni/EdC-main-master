import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';


export default function Container() {
  const [showCredentials, setShowCredentials] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <View style={styles.container}>
      <Image source={require("../assets/images/macena.png")} style={styles.productoRedondo}/>
      <Button title={"Ver góndola"} color={"transparent"} onPress={() => Alert.alert("Completado", "Compra finalizada con éxito")} style={styles.button} />
       </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>MACENA</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[styles.mostrartext ]}>
              Mostrar credenciales
              <FontAwesome name="arrow-right" style={styles.icon} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType={"slide"}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
          <Image source={require("../assets/images/macena.png")} style={styles.productoRedondoCred}/>
          <Text style={styles.credentialsTexts}>Credenciales de Macena</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <FontAwesome name="times" style={styles.modalCloseIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.credentialsContainer}>
          <Text style={styles.credentialsText}>Nombre:</Text>
         <Text style={styles.credentialsDescription}>Macena S.A</Text>
           <Text style={styles.credentialsText}>Email:</Text>
          <Text style={styles.credentialsDescription}>macena@gmail.com</Text>
         <Text style={styles.credentialsText}>Teléfono:</Text>
         <Text style={styles.credentialsDescription}>0351 638-7800</Text>
          <Text style={styles.credentialsText}>Provincia:</Text>
          <Text style={styles.credentialsDescription}>Córdoba</Text>
          <Text style={styles.credentialsText}>Dirección:</Text>
          <Text style={styles.credentialsDescription}>N. Rodríguez Peña 2439, X5001FIO Córdoba</Text>
    </View>
        </View>
      </Modal>        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileInfoContainer: {
    flex: 0,
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    marginTop: 0,
  },
  productoRedondo: {
    backgroundColor: 'rgb(232,228,234)',
    resizeMode: 'center',
    width: 50,
    height: 50,
    borderRadius: 500,
    borderColor: '#020202',
    borderWidth: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
  },
  mostrartext: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    fontSize: 16,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  credentialsContainer: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  credentialsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  productoRedondoCred: {
    backgroundColor: '#020202',
    resizeMode: 'center',
    width: 130,
    height: 130,
    borderRadius: 500,
    borderColor: '#020202',
    borderWidth: 3,
    marginTop: 50,
    marginLeft: 50,
  },
  credentialsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 10,
  },
  credentialsTexts: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 50,
    marginRight: 50,
  },
  modal: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '200',
  },
  modalCloseIcon: {
    fontSize: 30,
    color: 'gray',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  credentialsDescription: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
});
