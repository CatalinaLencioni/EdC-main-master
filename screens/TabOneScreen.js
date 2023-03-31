import { StyleSheet, TouchableOpacity, Image  } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function TabOneScreen() {
  const navigation = useNavigation();

  const menuOptions = [
    { name: "Perfil", icon: "md-person", onPress: () => navigation.navigate("PerfilScreen") },
    { name: "Empresas EDC", icon: "md-business", onPress: () => navigation.navigate("EmpresaScreen") },
    { name: "Marco Legal", icon: "md-document", onPress: () => navigation.navigate("MarcoLegalScreen") },
    { name: "Beneficios", icon: "md-gift", onPress: () => navigation.navigate("BeneficiosScreen") },
    { name: "Instructivo Recor Regimenes de Beneficio EdC", icon: "md-book", onPress: ()  => navigation.navigate("InstructivoScreen") },
    { name: "Beneficiario Provisiorio", icon: "md-person-add", onPress: () => navigation.navigate("BeneficiarioProvScreen") },
    { name: "Regimen EdC", icon: "md-clipboard", onPress: () => navigation.navigate("RegimenScreen") },
    { name: "Instructivo de validación Recor", icon: "md-book", onPress: () => navigation.navigate("InsValidScreen") },
  ];

  const onPressMenuItem = (onPressFunction) => {
    onPressFunction();
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/landing.png')} style={styles.logo} />
     
      <View style={styles.menuContainer}>
        {menuOptions.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onPressMenuItem(item.onPress)}>
            <View style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color="black" style={styles.menuIcon} />
              <Text style={styles.menuItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuItemText: {
    marginLeft: 15,
    alignSelf: "flex-start",
  },
  menuOptionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 15,
    marginBottom: 40,
  },
  menuIcon: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  menuText: {
    alignSelf: "flex-start",
  },    
  logo: {
  width: 900,
  height: 150,
  resizeMode: 'contain',
  justifyContent: "center",
},
});
