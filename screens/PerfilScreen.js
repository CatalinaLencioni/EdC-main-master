import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NOTIFICATIONS = [
  {
    id: '1',
    title: '¡Oferta limitada!',
    message: 'Solo hoy, descuento del 30% en toda la tienda',
    date: '2023-04-25',
  },
  {
    id: '2',
    title: 'Nuevo inventario',
    message: '¡Tenemos productos frescos y deliciosos en stock!',
    date: '2023-04-24',
  },
  {
    id: '3',
    title: 'Horario especial por el feriado',
    message: 'Mañana abriremos de 10:00am a 4:00pm',
    date: '2023-04-30',
  },
];

const NotificationItem = ({ id, title, message, date, onPressClose }) => {
  return (
    <View style={styles.notificationContainer}>
      <TouchableOpacity onPress={onPressClose} style={styles.closeIconContainer}>
        <Ionicons name="close-outline" size={24} color="#666" style={styles.closeIcon} />
      </TouchableOpacity>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
      <Text style={styles.notificationDate}>{date}</Text>
    </View>
  );
};

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [showContainer, setShowContainer] = useState(false);

  const handleRemoveNotification = (id) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {showContainer && (
        <View style={styles.container}>
         <Image source={require("../assets/images/macena.png")} style={styles.profilePicture}/>
          <Text style={styles.companyName}>Macena</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => setShowContainer(!showContainer)}>
        <Text style={styles.showContainer}>{showContainer ? 'Ocultar contenedor' : 'Mostrar contenedor'}</Text>
      </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'column',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 0,
    marginBottom: 20,
    position: 'relative',
    borderStyle: 'solid',
    backgroundColor: '#fff', // agregando un fondo blanco
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  profilePicture: {
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
companyName: {
  fontWeight: 'bold',
  fontSize: 24,
  color: '#0A387D',
  textAlign: 'center', // centrar horizontalmente
  alignItems: 'center', // centrar verticalmente
},
  showContainer: {
    alignSelf: 'flex-end',
    padding: 16,
    textDecorationLine: 'underline',
    color: '#0A387D',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System', // nombre de la fuente personalizada
  },
  notificationMessage: {
    fontSize: 16,
    fontFamily: 'System', // otro nombre de fuente personalizada
  },
  notificationDate: {
    fontSize: 14,
    fontFamily: 'System', // nombre de la fuente predeterminada
  },
});


export default NotificationsScreen;
