import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  Linking,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

  const landingImage = require("../assets/images/landing.png");
  const faviconImage = require("../assets/images/favicon.png");
  const splashImage = require("../assets/images/splash.png");
  
  const photos = [
    { id: "1", source: landingImage },
    { id: "2", source: faviconImage },
    { id: "3", source: splashImage },
    // Agrega más objetos con la información de cada foto
  ];
  

export default function EmpresaScreen({ navigation }) {
  const title =
    "Las empresas cordobesas que forman parte de la Economía del Conocimiento, tienen acceso a los beneficios impositivos y estímulos a la creación de puestos de trabajo que prevé el Régimen Provincial de la Economía del Conocimiento de Córdoba. El conglomerado de Pymes y emprendimientos locales provienen de diversas actividades que producen servicios basados en el conocimiento o conocimiento embebidos en productos.";
  const subtitle = "Ver 81 empresas adheridas";

  const handleOpenLink = () => {
    // Abre un enlace en el navegador cuando se hace clic en el botón
    Linking.openURL(
      "https://docs.google.com/spreadsheets/d/1lyf6CqgmGUD4aGs9BS3bC91fNRML-n3u9u5HZhlymVk/edit#gid=0"
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/landing.png")}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Empresas cordobesas</Text>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleOpenLink}
          accessibilityRole="button"
        >
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="blue"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.buttonText}>
            <Text style={[styles.subTitle, styles.blueText]}>{subtitle}</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={photos} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.photo} />
        )}
        horizontal={false}
        numColumns={1}
        contentContainerStyle={styles.photoList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  photoList: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  photo: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  subTitle: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  blueText: {
    color: "blue",
  },
});
