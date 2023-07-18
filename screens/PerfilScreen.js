import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Modal, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const NOTIFICATIONS = [
  {
    id: '1',
    title: 'Recordatorio de Revalidación',
    message: 'Dispuesto por la Ley N° 10.649, su modificatoria 10.722  Capítulo III, punto 3.1 del Anexo I ',
    date: 'Resolución 001/2023',
    link: 'https://cidi.cba.gov.ar/portal-publico/',
  },
  {
    id: '2',
    title: 'Taller para empresas adheridas al Régimen',
    message: 'Información relativa a la Ley de Economía del Conocimiento, funcionamiento, uso de sus beneficios, revalidación, auditorías y también te ayudaremos a resolver consultas e inquietudes.',
    date: 'Miércoles 28/06 -  10:30 hs',
    message: 'Presencial en Auditorio Ministerio de Ciencia y Tecnología, Álvarez de Arenales 230, Córdoba',
    link: ' https://drive.google.com/drive/folders/1Z6ZBIKhB7Nz-gv3XksqjNoGqC5o133gX?usp=drive_link ', 
   },
  {
    id: '3',
    title: 'Programa de Promoción de Empleo - 2023',
    message: 'En el siguiente link podrán encontrar el procedimiento y anexos para aplicar al Programa:',
    date: 'Hasta el día 22/06 inclusive',
    link: 'https://drive.google.com/file/d/1IuiF7e5bo-6IJmG5GSNMIapurJkAj3Ol/view',
  },
];


const NotificationItem = ({ id, title, message, date, onPressClose, link }) => {
  const handleOpenLink = () => {
    if (link) {
      Linking.openURL(link);
    }
  };
  
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
        <TouchableOpacity onPress={handleOpenLink}>
      <Text style={styles.linkButton}>Ver más</Text>
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
    <View style={{ flex: 1 }}>
      <ScrollView>
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
                  <ScrollView>
                    <Text style={styles.credentialsText}>Resolución:</Text>
                    <Text style={styles.credentialsDescription}>001/2023</Text>
                    <Text style={styles.credentialsText}>Fecha de resolución:</Text>
                    <Text style={styles.credentialsDescription}>31/1/2023</Text>
                    <Text style={styles.credentialsText}>Vencimiento beneficio:</Text>
                    <Text style={styles.credentialsDescription}>31/1/2033</Text>
                    <Text style={styles.credentialsText}>Próxima Validación Anual:</Text>
                    <Text style={styles.credentialsDescription}>15/2/2024</Text>
                    <Text style={styles.credentialsText}>Email:</Text>
                    <Text style={styles.credentialsDescription}>macena@gmail.com</Text>
                    <Text style={styles.credentialsText}>Teléfono:</Text>
                    <Text style={styles.credentialsDescription}>0351 638-7800</Text>
                    <Text style={styles.credentialsText}>Dirección:</Text>
                    <Text style={styles.credentialsDescription}>N. Rodríguez Peña 2439, X5001FIO Córdoba</Text>
                  </ScrollView>
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
      </ScrollView>
    </View>
  );
  
              }  

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
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 1,
    marginLeft: -15,
    marginBottom: 1,
    width: '110%', // Ajusta el valor para hacerlo más largo
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
    right: 360,
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
    top: -75,
    right: -10,
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
    marginTop: 30,
    marginLeft: 120,
  },
  credentialsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 5,
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
    marginBottom: 5,
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
    marginTop: -210,
    marginLeft: 350,
  },
  credentialsTextsM: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    textTransform: 'uppercase',
    marginTop: 20,
    textAlign: 'center',
  },
  linkButton: {
    color: 'blue', 
    textdecoration: 'underline',
  },
});

export default NotificationsScreen;
