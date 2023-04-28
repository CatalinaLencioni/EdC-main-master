import React from "react";
import {StyleSheet, TouchableOpacity, Image, View, Text, Linking} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

 
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
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={require("../assets/images/landing.png")}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Empresas cordobesas</Text>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleOpenLink} accessibilityRole="button">
          <Ionicons name="arrow-forward-outline" size={24} color="blue" style={{ marginRight: 10 }}/>
          <Text style={styles.buttonText}>
            <Text style={[styles.subTitle, styles.blueText]}>{subtitle}</Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
      <Image
        source={require("../assets/images/map.png")}
        style={styles.map}
      />
      </View>  
      </View>
    </View>
    </ScrollView>
  )
};

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
    fontSize: 20,
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
});
