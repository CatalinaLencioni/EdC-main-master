import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

export default function Container() {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/macena.png")}
          style={styles.productoRedondo}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>MACENA</Text>
        </View>
      </View>

      <Button
        title={"Ver góndola"}
        color={"transparent"}
        onPress={() => Alert.alert("Completado", "Compra finalizada con exito")}
        style={styles.button}
      />
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
    marginTop: 20,
    borderWidth: 0,
    width: 1,
    height: 1,
  },
  productoRedondo: {
    backgroundColor: 'rgb(232,228,234)',
    resizeMode: 'center',
    width: 100,
    height: 100,
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
});
