import { StyleSheet, TouchableOpacity, Image } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert } from 'react-native';


export default function TabOneScreen() {
  const navigation = useNavigation();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const menuOptions = [
    {
      name: "Perfil",
      icon: "person-sharp",
      onPress: () => navigation.navigate("PerfilScreen"),
    },
    {
      name: "Empresas EDC",
      icon: "md-business",
      onPress: () => navigation.navigate("EmpresaScreen"),
    },
    {
      name: "Marco Legal",
      icon: "documents",
      onPress: () => navigation.navigate("MarcoLegalScreen"),
    },
    {
      name: "Beneficios",
      icon: "card",
      onPress: () => navigation.navigate("MarcoLegalScreen"),
    },    
    {
      name: "Cerrar Sesión",
      icon: "exit-outline",
      onPress: () => {
        Alert.alert(
          "Cerrar Sesión",
          "¿Estás seguro de que deseas cerrar sesión?",
          [
            {
              text: "Cancelar",
              style: "cancel"
            },
            {
              text: "Aceptar",
              onPress: () => navigation.navigate("TabTwoScreen")
            }
          ]
        );
      }
    },
    {
      name: "Instructivos y PDFs",
      icon: "document-attach",
      subMenu: [
        {
          name: "Régimen de beneficiarios EDC",
          icon: "reader",
          onPress: () => navigation.navigate("InsValidScreen"),
        },
        {
          name: "Revalidación RECOR",
          icon: "duplicate",
          onPress: () => navigation.navigate("InsValidScreen"),
        },
        {
          name: "Beneficiario Provisorio",
          icon: "book",
          onPress: () => navigation.navigate("InsValidScreen"),
        },
        {
          name: "Programa Empleo",
          icon: "clipboard",
          onPress: () => navigation.navigate("InsValidScreen"),
        }
      ],
    },
  ];

  const onPressMenuItem = (onPressFunction, hasSubMenu) => {
    if (onPressFunction) {
      onPressFunction();
    }
    if (hasSubMenu) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/landing.png")} style={styles.logo} />
      {menuOptions.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPressMenuItem(item.onPress, item.subMenu)}
        >
          <View style={styles.menuItem}>
            <Ionicons
              name={item.icon}
              size={24}
              color="black"
              style={styles.menuIcon}
              marginLeft="30"
            />
            <Text style={styles.menuItemText}>{item.name}</Text>
            {item.subMenu && (
              <Ionicons
                name={isSubMenuOpen ? "md-chevron-up" : "md-chevron-down"}
                size={24}
                color="black"
                style={styles.menuIcon}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
      {isSubMenuOpen && (
        <View style={styles.subMenu}>
          {menuOptions
            .find((item) => item.name === "Instructivos y PDFs")
            .subMenu.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onPressMenuItem(item.onPress)}>
                <View style={styles.subMenuItem}>
                  <Ionicons
                    name={item.icon}
                    size={24}
                    color="black"
                    style={styles.menuIcon}            
                  />
                  <Text style={styles.subMenuItemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      )}

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 30, // agregando margen en el lado derecho del 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  menuContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    alignItems: "flex-start",
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  menuItemText: {
    marginLeft: 10,
  },
  menuOptionContainer: {
    flexDirection: "row", // Cambia la dirección a "column"
    paddingVertical: 15,
    marginBottom: 40,
  },
  menuIcon: {
    marginRight: 5,
    justifyContent: "flex-start",
  },
  subMenuItem: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  subMenuItemText: {
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  logo: {
    width: 1000,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center"
  },  
});
