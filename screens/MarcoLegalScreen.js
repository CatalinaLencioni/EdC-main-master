import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, FlatList, ScrollView, Image, useState } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const data = [
  { name: 'Ley 7.22', url: 'https://www.example.com/download1' },
  { name: 'Decreto Reglamentario', url: 'https://www.example.com/download2' },
  { name: 'Resolución 2/2021', url: 'https://www.example.com/download3' },
  { name: 'Ley 10.649', url: 'https://www.example.com/download4' },
  { name: 'Resolución 8/22', url: 'https://www.example.com/download5' },
  { name: 'Promoción de Empleo', url: 'https://www.example.com/download6' },
];

export default function DownloadCarousel() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.link}>
        <MaterialIcons name="file-download" size={20} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.itemTitle}>{item.name}</Text>
    </View>
  );

  const renderRow = ({ item, index }) => (
    <View style={styles.rowContainer}>
      <View style={styles.rowItem}>
        {data[index * 2] && renderItem({ item: data[index * 2] })}
      </View>
      <View style={styles.rowItem}>
        {data[index * 2 + 1] && renderItem({ item: data[index * 2 + 1] })}
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>     
 <View style={styles.containerB}>
  <Image source={require("../assets/images/marcolegal.png")} style={styles.headerImage}/>
  <Text style={styles.title}>Marco Legal</Text>
      <FlatList
        data={Array(Math.ceil(data.length / 2)).fill().map((_, i) => i)}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
        <Text style={styles.title}>Beneficios para empresas</Text>

    </View>
</ScrollView>
)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: 125,
    resizeMode: "cover",
    marginBottom: 20,
    paddingHorizontal: 0, // eliminar el margen horizontal
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatListContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse', // cambiar a row-reverse
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  icon: {
    marginRight: -10, 
  },  
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  containerHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerContent: {
    padding: 10,
  },
});
