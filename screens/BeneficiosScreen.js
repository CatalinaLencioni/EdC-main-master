import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function BeneficiosScreen({ navigation }) {
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
      toValue: isCollapsed2 ? 100 : 0, // adjust the height value to match your content
      duration: 300, // adjust the duration as needed
      useNativeDriver: false, // set to true if using RN version 0.62 or higher
    }).start();
  };

  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
    Animated.timing(height3, {
      toValue: isCollapsed3 ? 100 : 0, // adjust the height value to match your content
      duration: 300, // adjust the duration as needed
      useNativeDriver: false, // set to true if using RN version 0.62 or higher
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beneficios</Text>
      <TouchableOpacity style={styles.item} onPress={toggleCollapse1}>
  <View style={styles.itemHeader}>
    <View style={styles.itemHeaderTitle}>
      <Text style={styles.itemTitle}>Beneficios impositivos</Text>
      <Icon
        name={isCollapsed1 ? "chevron-down" : "chevron-up"}
        size={24}
        color="black"
        style={{ marginLeft: 200 }}
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
      {"\u2022"} Exención por 10 años del 100% del Impuesto Inmobiliario
      sobre inmuebles en los que se desarrolle la actividad.{"\n"}
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
        <Animated.View style={{ height: height2 }}>
          <Text style={styles.itemDescription}>
          Asignación estímulo por cada nuevo empleado por 6 meses.
          Casos específicos por género, discapacidad, zonas desfavorables y formación en doctorado o posdoctorado CTIM (Ciencia, Tecnología, Ingeniería y Matemática), el incentivo será 30% mayor.
          </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    position: "absolute", // agregar posición absoluta
    top: 0, // alinear al top
    right: 230, // alinear a la derecha
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: "blue",
  },
  item: {
    marginBottom: 10,
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
});
