import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, View, Text, TextInput, Button, Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


export default function TabOneScreen() {
  const navigation = useNavigation();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "Macena" && password === "macena123") {
      setIsModalVisible(false);
      setError("");
      navigation.navigate("PerfilScreen");
      clearFields(); // Limpia los campos de usuario y contraseña
    } else {
      setError("Credenciales inválidas");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
  };

  const menuOptions = [
    {
      name: "Perfil",
      icon: "person-sharp",
      onPress: () => openModal(),
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
  
  const openModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/landing.png")} style={styles.logo} />

      <Modal visible={isModalVisible} animationType="slide" transparent={false}>
  <View style={styles.modalContainer}>
    <Text style={styles.modalTitle}>Inicio de Sesión</Text>
    <TextInput
      placeholder="Correo Electrónico"
      onChangeText={(text) => setEmail(text)}
      value={email}
      style={styles.input}
    />
    <TextInput
      placeholder="Contraseña"
      onChangeText={(text) => setPassword(text)}
      value={password}
      secureTextEntry
      style={styles.input}
    />
    {error !== "" && <Text style={styles.errorText}>{error}</Text>}
    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.buttonText}>Iniciar Sesión</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={closeModal} style={styles.closeIconContainer}>
      <Ionicons name="close" size={24} color="black" style={styles.modalCloseIcon} />
    </TouchableOpacity>
  </View>
</Modal>


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
              marginLeft={30}
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
    marginLeft: 20,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalCloseIcon: {
    marginRight: 10,
  },
});
