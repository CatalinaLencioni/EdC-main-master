import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, FlatList, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const images = [
  { id: "1", uri: require("../assets/images/st.png") },
  { id: "2", uri: require("../assets/images/twins.png") },
  { id: "3", uri: require("../assets/images/marvel.png") },
  { id: "4", uri: require("../assets/images/it.png") },
  { id: "5", uri: require("../assets/images/dicsy.png") },
  { id: "6", uri: require("../assets/images/in.png") },
  { id: "7", uri: require("../assets/images/talent.png") },
  { id: "8", uri: require("../assets/images/dta.png") },
];

const data = [
  { name: 'Ley 7.22', url: 'https://www.example.com/download1' },
  { name: 'Decreto Reglamentario', url: 'https://www.example.com/download2' },
  { name: 'Resolución 2/2021', url: 'https://www.example.com/download3' },
  { name: 'Ley 10.649', url: 'https://www.example.com/download4' },
  { name: 'Resolución 8/22', url: 'https://www.example.com/download5' },
  { name: 'Promoción de Empleo', url: 'https://www.example.com/download6' },
];

export default function DownloadCarousel() {
  const [isCollapse1Open, setCollapse1Open] = useState(false);
  const [isCollapse2Open, setCollapse2Open] = useState(false);
  const [isCollapse3Open, setCollapse3Open] = useState(false);

  const toggleCollapse1 = () => {
    setCollapse1Open(!isCollapse1Open);
  };

  const toggleCollapse2 = () => {
    setCollapse2Open(!isCollapse2Open);
  };

  const toggleCollapse3 = () => {
    setCollapse3Open(!isCollapse3Open);
  };

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
        <Image source={require('../assets/images/marcolegal.png')} style={styles.headerImage} />
        <Text style={styles.title}>Marco Legal</Text>
        <FlatList
          data={Array(Math.ceil(data.length / 2)).fill().map((_, i) => i)}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        <Text style={styles.title3}>Beneficios para empresas</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse1}>
          <Text style={styles.toggleButtonText}>Beneficios impositivos</Text>
          <MaterialIcons name={isCollapse1Open ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
        </TouchableOpacity>
        {isCollapse1Open && (
          <View style={styles.collapseContent}>
            <Text>- Estabilidad Fiscal.</Text>
            <Text>- Exención por 10 años del 100% del Impuesto sobre los Ingresos Brutos.</Text>
            <Text>- Exención por 10 años del 100% del Impuesto de Sellos.</Text>
            <Text>- Exención por 10 años del 100% del Impuesto Inmobiliario sobre inmuebles en los que se desarrolle la actividad.</Text>
          </View>
        )}

        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse2}>
          <Text style={styles.toggleButtonText}>Promoción al empleo</Text>
          <MaterialIcons
            name={isCollapse2Open ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        {isCollapse2Open && (
          <View style={styles.collapseContent}>
            <Text>- Asignación estímulo por cada nuevo empleado por 6 meses.</Text>
            <Text>- Casos específicos por género, discapacidad, zonas desfavorables y formación en doctorado o posdoctorado CTIM (Ciencia, Tecnología, Ingeniería y Matemática), el incentivo será 30% mayor.</Text>
          </View>
        )}

        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse3}>
          <Text style={styles.toggleButtonText}>Formación y capacitación</Text>
          <MaterialIcons name={isCollapse3Open ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
        </TouchableOpacity>
        {isCollapse3Open && (
          <View style={styles.collapseContent}>
            <Text>- Capacitación específica co financiada con el sector privado.</Text>
            <Text>- Prácticas profesionales.</Text>
          </View>
        )}
      </View>

      <View style={styles.containerB}>
        <Text style={styles.title2}>Actores de la Economía del Conocimiento</Text>
        <View style={styles.content}></View>
      <View style={styles.footer}>
        <ScrollView horizontal={true}>
          <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={item.uri} style={styles.image} />
                <Text style={styles.imageDescription}>{item.description}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  containerB: {
    padding: 20,
  },
  headerImage: {
    width: '105%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
  title2: {
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 10,
    marginRight: 10,
  },
  title3: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: -45,
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
    flexDirection: 'row-reverse',
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: -10,
  },
  toggleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  collapseContent: {
    paddingVertical: 30,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footer: {
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  
});
