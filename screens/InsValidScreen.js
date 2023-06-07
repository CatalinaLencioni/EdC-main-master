import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const CollapsibleComponent = () => {
  const [isCollapsed1, setCollapsed1] = useState(true);
  const [isCollapsed2, setCollapsed2] = useState(true);
  const [isCollapsed3, setCollapsed3] = useState(true);
  const [isCollapsed4, setCollapsed4] = useState(true);

  const toggleCollapsible1 = () => {
    setCollapsed1(!isCollapsed1);
  };

  const toggleCollapsible2 = () => {
    setCollapsed2(!isCollapsed2);
  };

  const toggleCollapsible3 = () => {
    setCollapsed3(!isCollapsed3);
  };

  const toggleCollapsible4 = () => {
    setCollapsed4(!isCollapsed4);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleCollapsible1}>
        <Text style={styles.headerText}>Collapsible 1</Text>
        <Ionicons name={isCollapsed1 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
      </TouchableOpacity>
      {!isCollapsed1 && (
        <View style={styles.content}>
          <Text>Content for Collapsible 1</Text>
        </View>
      )}

      <TouchableOpacity style={styles.header} onPress={toggleCollapsible2}>
        <Text style={styles.headerText}>Collapsible 2</Text>
        <Ionicons name={isCollapsed2 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
      </TouchableOpacity>
      {!isCollapsed2 && (
        <View style={styles.content}>
          <Text>Content for Collapsible 2</Text>
        </View>
      )}

      <TouchableOpacity style={styles.header} onPress={toggleCollapsible3}>
        <Text style={styles.headerText}>Collapsible 3</Text>
        <Ionicons name={isCollapsed3 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
      </TouchableOpacity>
      {!isCollapsed3 && (
        <View style={styles.content}>
          <Text>Content for Collapsible 3</Text>
        </View>
      )}

      <TouchableOpacity style={styles.header} onPress={toggleCollapsible4}>
        <Text style={styles.headerText}>Collapsible 4</Text>
        <Ionicons name={isCollapsed4 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
      </TouchableOpacity>
      {!isCollapsed4 && (
        <View style={styles.content}>
          <Text>Content for Collapsible 4</Text>
        </View>
      )}
    </View>
  );
};

export default function InstructivosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("../assets/images/ins.png")}
        />
      </View>
      <Text style={styles.title}>Instructivos</Text>
      <CollapsibleComponent />
      <View style={styles.footer}>
        <Image
          style={styles.footerImage}
          source={require("../assets/images/banner.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    marginBottom: -100,
  },
  headerImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30, // Ajusta el tamaño de fuente según tus necesidades
    marginLeft: 16, // Ajusta el margen izquierdo según tus necesidades
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    borderBottomWidth: 1, // Elimina esta línea
    borderBottomColor: "#ccc", // Elimina esta línea
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  // Styles for CollapsibleComponent
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    // borderBottomWidth: 1, // Elimina esta línea
    // borderBottomColor: '#ccc', // Elimina esta línea
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    paddingVertical: 8,
  },
});