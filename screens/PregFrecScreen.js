import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { Linking } from "react-native";

const handleDescargarPDF = () => {
  const url = "https://mincyt.cba.gov.ar/wp-content/uploads/2022/11/PREGUNTAS-FRECUENTES-RECOR-1.pdf";
  Linking.openURL(url);
};

export default function PregFrecScreen() {
  const handleDescargarPDF = () => {
    console.log("Descargar PDF");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Agregar el componente DescargaPDF */}
        <View style={styles.pdfContainer}>
          <Text style={styles.pdfText}>
            Tenemos las respuestas a la mayoría de tus preguntas en este
            documento:
          </Text>
          <TouchableOpacity
            onPress={handleDescargarPDF}
            style={styles.pdfButtonContainer}
          >
            <Text style={styles.pdfButton}>Descargar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pdfContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 20,
  },
  pdfText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  pdfButtonContainer: {
    alignSelf: "flex-start",
  },
  pdfButton: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
