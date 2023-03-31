  import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Modal,
  } from "react-native";
  import { MaterialIcons } from "@expo/vector-icons";
  import React, { useState } from "react";
  import { ScrollView } from "react-native-gesture-handler";

  export default function InsValidScreen({ navigation }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={require("../assets/images/ins.png")}/>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Instructivos</Text>
            <TouchableOpacity style={styles.rectangle} onPress={() => setIsModalVisible(true)}>
              <View style={styles.header}>
                <Text style={styles.rectangleTitle}>
                  Régimen de beneficiarios EdC
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
              <Modal
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalHeader}>
                    <Image source={require("../assets/images/ins.png")} style={styles.modalHeaderImage}/>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.modalTitle}> Beneficiario Provisorio</Text>
                    </View>
                  </View>
                  <Text style={styles.modalText}> En esta sección se detalla el procedimiento para registrarse en el Registro de Beneficiarios del Régimen de Promoción de la Economía del Conocimiento de la Provincia de Córdoba como "Beneficiario Provisorio". Las empresas interesadas deben haber solicitado su inscripción en el Registro Nacional de Beneficiarios del Régimen de Promoción de la Economía del Conocimiento y cumplir con los requisitos formales previstos en las normativas nacionales vigentes. Además, se deben completar el formulario de inscripción del RECOR y acreditar el cumplimiento de los requisitos formales previstos por la Subsecretaría de Economía del Conocimiento. La calidad de "Beneficiario Provisorio" se convierte en "definitiva" cuando la empresa obtiene y acredita el acto administrativo correspondiente. Si no se obtiene en un plazo de 18 meses, se producirá la baja automática del beneficiario.
                  </Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setIsModalVisible(false)}>
                    <Text style={styles.modalButtonText}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rectangle}>
              <Text style={styles.rectangleTitle}>Revalidación Recor</Text>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
              <Modal visible={isModalVisible1} onRequestClose={() => setIsModalVisible1(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalHeader}>
                    <Image source={require("../assets/images/ins.png")} style={styles.modalHeaderImage}/>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={styles.modalTitle}> Beneficiario Provisorio </Text>
                    </View>
                  </View>
                  <Text style={styles.modalText}>
                  </Text>
                  <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible1(tru)}>
                    <Text style={styles.modalButtonText}>Cerrar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rectangle}>
              <Text style={styles.rectangleTitle}>Beneficiario provisorio</Text>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rectangle}>
              <Text style={styles.rectangleTitle}>Programa Empleo</Text>
              <MaterialIcons name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Image
              style={styles.footerImage}
              source={require("../assets/images/banner.png")}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
    header: {
      flex: 1,
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    headerImage: {
      width: "110%",
      height: 160,
      resizeMode: "contain",
      marginBottom: 180,
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      flex: 1,
      width: "100%",
      marginTop: 200, 
    },
    rectangle: {
      backgroundColor: "#e5e5e5",
      width: "100%",
      height: 55,
      borderRadius: 10,
      margin: "1%",
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
    },
    rectangleTitle: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      width: "90%",
    },
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 15,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    footerImage: {
      width: "110%",
      height: 100,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    modalHeader: {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 20,
    },
    modalHeaderImage: {
      width: 400,
      height: 160,
      marginBottom: 10,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      maxWidth: "60%",
      marginRight: 160,
    },
    modalButton: {
      backgroundColor: "blue",
      padding: 15,
      borderRadius: 10,
      marginTop: 20,
    },
  });
