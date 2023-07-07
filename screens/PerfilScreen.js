import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from 'react-native-vector-icons';

const NOTIFICATIONS = [
  { id: '1', title: 'Impuesto sobre los Ingresos Brutos', message: 'Exención por 10 años del 100%', date: '2023-04-25' },
  { id: '2', title: 'Impuesto de Sellos', message: 'Exención por 10 años del 100%', date: '2023-04-24' },
  { id: '3', title: 'Promoción de Empleo', message: 'Casos específicos', date: '2023-04-30' },
];

const NotificationItem = ({ id, title, message, date, onPressClose }) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.column}>
        <View style={styles.titleContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <TouchableOpacity onPress={onPressClose} style={styles.alertIconContainer}>
            <Ionicons name="ios-warning" size={20} color="#666" style={styles.alertIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.notificationMessage}>{message}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.notificationDate}>{date}</Text>
        <TouchableOpacity onPress={onPressClose} style={styles.closeIconContainer}>
          <Ionicons name="close-outline" size={20} color="#666" style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemoveNotification = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={{ flex: 1 }}>
        <View style={[styles.container, { width: 386, height: 150, borderWidth: 3, borderColor: 'white', backgroundColor: 'white', marginTop: 10, borderRadius: 40 }]}>
          <Image source={require('../assets/images/macena.png')} style={styles.profilePicture} />
          <Text style={styles.companyName}>Macena</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.showContainer}>
            <Text style={styles.showText}>Mostrar Credenciales</Text>
            <Ionicons name="arrow-forward-outline" size={20} color="#0A387D" style={styles.arrowIcon} />
          </TouchableOpacity>
          <Modal visible={modalVisible} animationType="slide" onRequestClose={handleCloseModal}>
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <Image source={require('../assets/images/macena.png')} style={styles.productoRedondoCred} />
                <Text style={styles.credentialsTextsM}>Credenciales de Macena</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <FontAwesome name="close" style={styles.modalCloseIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.credentialsContainer}>
                <Text style={styles.credentialsText}>Nombre: </Text>
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
        <Text style={styles.notificationTitleN}>Notificaciones</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationItem
              id={item.id}
              title={item.title}
              message={item.message}
              date={item.date}
              onPressClose={() => handleRemoveNotification(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 16,
    marginTop: 15,
    marginLeft: 1,
    marginRight: 1,
    width: '100%',
  },
  column: {
    flex: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  profilePicture: {
    backgroundColor: '#020202',
    resizeMode: 'center',
    width: 120,
    height: 120,
    borderRadius: 500,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: -90,
    marginLeft: -240,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 80,
    marginTop: -120,
  },
  showContainer: {
    alignSelf: 'flex-end',
    padding: 16,
    textDecorationLine: 'underline',
    color: '#0A387D',
  },
  titleContainer: {
    backgroundColor: '#dcdcdc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 25,
    marginBottom: 5,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#dcdcdc',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  alertIcon: {
    top: -2,
    right: 300,
  },
  notificationTitleN: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 10,
  },
  notificationMessage: {
    fontSize: 14,
  },
  closeIconContainer: {
    position: 'absolute',
    top: -55,
    right: -5,
  },
  notificationDate: {
    fontSize: 12,
    color: '#666',
  },
  alertIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  showContainer: {
    position: 'absolute',
    right: 40,
    bottom: 5,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
  },
  showText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginRight: -7,
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 8,
    color: 'blue',
  },
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
    backgroundColor: 'white',
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
    marginLeft: 10,
    backgroundColor: 'white',
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
    marginLeft: 120,
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 50,
    marginRight: 50,
  },
  credentialsDescription: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '200',
  },
  modalCloseIcon: {
    fontSize: 30,
    color: 'gray',
    position: 'absolute',
    marginTop: -230,
    marginLeft: 350,
  },
  credentialsTextsM: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 50,
    textAlign: 'center',
  },
});

export default NotificationsScreen;
