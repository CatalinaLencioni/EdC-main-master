import {StyleSheet,Text,TouchableOpacity,View,Image,Linking,ScrollView,Animated} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "@expo/vector-icons";

export default function InstructivoScreen({ navigation }) {
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [height1, setHeight1] = useState(new Animated.Value(0));
  const [height2, setHeight2] = useState(new Animated.Value(0));
  const [height3, setHeight3] = useState(new Animated.Value(0));

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
    Animated.timing(height1, {
      toValue: isCollapsed1 ? 300 : 0, // ajustar la altura para mostrar todo el texto
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
    Animated.timing(height2, {
      toValue: isCollapsed2 ? 300 : 0, // adjust the height value to match your content
      duration: 300, // adjust the duration as needed
      useNativeDriver: false, // set to true if using RN version 0.62 or higher
    }).start();
  };

  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
    Animated.timing(height3, {
      toValue: isCollapsed3 ? 300 : 0, // adjust the height value to match your content
      duration: 300, // adjust the duration as needed
      useNativeDriver: false, // set to true if using RN version 0.62 or higher
    }).start();
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
  <Image
    source={require("../assets/images/marcolegal.png")}
    style={styles.headerImage}
  />
  <Text style={styles.title}>Marco Legal</Text>
  <View style={styles.buttonContainer}>
    <View style={[styles.buttonRow, { flexDirection: 'row' }]}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.example.com/download")
        }
        style={[styles.link, { flex: 1 }]}
      >
        <Text style={styles.linkText}>Ley 7.22</Text>
        <MaterialIcons
          name="file-download"
          size={20}
          color="#2e78b7"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.example.com/download")
        }
        style={[styles.link, { flex: 1, marginLeft: 10 }]}
      >
        <Text style={styles.linkText}>Decreto Reglamentario</Text>
        <MaterialIcons
          name="file-download"
          size={20}
          color="#2e78b7"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
    <View style={[styles.buttonRow, { flexDirection: 'row' }]}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.example.com/download")
        }
        style={[styles.link, { flex: 1 }]}
      >
        <Text style={styles.linkText}>Resolución 2/2021</Text>
        <MaterialIcons
          name="file-download"
          size={20}
          color="#2e78b7"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.example.com/download")
        }
        style={[styles.link, { flex: 1, marginLeft: 10 }]}
      >
        <Text style={styles.linkText}>Ley 10.649</Text>
        <MaterialIcons
          name="file-download"
          size={20}
          color="#2e78b7"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
    <View style={[styles.buttonRow, { flexDirection: 'row' }]}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.example.com/download")
        }
        style={[styles.link, { flex: 1 }]}
      >
              <Text style={styles.linkText}>Resolución 8/22</Text>
              <MaterialIcons
                name="file-download"
                size={20}
                color="#2e78b7"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.example.com/download")
              }
              style={[styles.link, { marginLeft: 10 }]}
            >
              <Text style={styles.linkText}>
                Régimen y Programas de Promoción de Empleo
              </Text>
              <MaterialIcons
                name="file-download"
                size={20}
                color="#2e78b7"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}> </Text>
          <Text style={styles.title}>Beneficios para empresas </Text>
          <TouchableOpacity style={styles.item} onPress={toggleCollapse1}>
            <View style={styles.itemHeaderTitle}>
              <Text style={styles.itemTitle}>Beneficios impositivos</Text>
              <View style={styles.itemHeaderIcon}>
                <Icon
                  name={isCollapsed1 ? "chevron-down" : "chevron-up"}
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <Animated.View style={{ height: height1 }}>
              <Text style={styles.itemDescription}>
                {"\u2022"} Estabilidad Fiscal{"\n"}
                {"\u2022"} Exención por 10 años del 100% del Impuesto sobre los
                Ingresos Brutos{"\n"}
                {"\u2022"} Exención por 10 años del 100% del Impuesto de Sellos
                {"\n"}
                {"\u2022"} Exención por 10 años del 100% del Impuesto
                Inmobiliario sobre inmuebles en los que se desarrolle la
                actividad.{"\n"}
              </Text>
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={toggleCollapse2}>
        <Text style={styles.itemTitle}>
          Promoción al empleo
        </Text>
        <Animated.View style={{ height: height2 }}>
          <Text style={styles.itemDescription}>
          Asignación estímulo por cada nuevo empleado por 6 meses.
          Casos específicos por género, discapacidad, zonas desfavorables y formación en doctorado o posdoctorado CTIM (Ciencia, Tecnología, Ingeniería y Matemática), el incentivo será 30% mayor.
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={toggleCollapse2}>
        <Text style={styles.itemTitle}>
          Formación y Capacitación
        </Text>
        <Animated.View style={{ height: height3 }}>
          <Text style={styles.itemDescription}>
          Asignación estímulo por cada nuevo empleado por 6 meses.
          Casos específicos por género, discapacidad, zonas desfavorables y formación en doctorado o posdoctorado CTIM (Ciencia, Tecnología, Ingeniería y Matemática), el incentivo será 30% mayor.
          </Text>
        </Animated.View>
      </TouchableOpacity>
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
  headerImage: {
    width: "110%",
    height: 160,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    position: "absolute", // agregar posición absoluta
    top: 0, // alinear al top
    right: 120, // alinear a la derecha
  },
  buttonContainer: {
    marginTop: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 7.5, // nuevo valor
    paddingHorizontal: 10, // nuevo valor
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  icon: {
    marginLeft: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    paddingHorizontal: 10,
  },
  itemHeaderTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  itemHeaderIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
});
