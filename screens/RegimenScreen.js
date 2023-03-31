import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RegimenScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <TouchableOpacity
          onPress={() => navigation.replace("RegimenScreen")}
          style={styles.link}
        >
          <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
      </View>
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
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
