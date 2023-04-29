import React from "react";
import {StyleSheet, TouchableOpacity, Image, View, Text, Linking, FlatList, ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const title =
  "Las empresas cordobesas que forman parte de la Economía del Conocimiento, tienen acceso a los beneficios impositivos y estímulos a la creación de puestos de trabajo que prevé el Régimen Provincial de la Economía del Conocimiento de Córdoba. El conglomerado de Pymes y emprendimientos locales provienen de diversas actividades que producen servicios basados en el conocimiento o conocimiento embebidos en productos.";
const subtitle = "Ver 81 empresas adheridas";

const images = [
  { id: "1", uri: require("../assets/images/dta.png")},
  { id: "2", uri: require("../assets/images/twins.png")},
  { id: "3", uri: require("../assets/images/it.png") },
  { id: "4", uri: require("../assets/images/marvel.png") },
  { id: "5", uri: require("../assets/images/dicsy.png") },
];

  const handleOpenLink = () => {
    Linking.openURL(
      "https://docs.google.com/spreadsheets/d/1lyf6CqgmGUD4aGs9BS3bC91fNRML-n3u9u5HZhlymVk/edit#gid=0"
    );
  };

export default function App() {
  return (
    <View style={styles.containers}>
       <ScrollView>
    <View style={styles.containers}>
      <Image source={require("../assets/images/landing.png")} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Empresas cordobesas</Text>
        <Text style={styles.titles}>{title}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOpenLink} accessibilityRole="button">
          <Ionicons name="arrow-forward-outline" size={24} color="blue" style={{ marginRight: 10 }}/>
          <Text style={styles.buttonText}>
            <Text style={[styles.subTitle, styles.blueText]}>{subtitle}</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
      <Image source={require("../assets/images/map.png")} style={styles.map}/>
      </View>  
      </View>
    </View>
    </ScrollView>
      <View style={styles.content}>
      </View>
      <View style={styles.footer}>
        <ScrollView horizontal={true}>
          <FlatList data={images} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image source={item.uri} style={styles.image} />
                <Text style={styles.imageDescription}>{item.description}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
 //   textAlign: "center",
  },
  titles: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  blueText: {
    color: "blue",
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 5,
  },
  map: {
   height: 300,
   justifyContent: "center",
  },
});
