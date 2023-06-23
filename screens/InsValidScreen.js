import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const images = [
  { id: "1", uri: require("../assets/images/dta.png")},
  { id: "2", uri: require("../assets/images/twins.png")},
  { id: "3", uri: require("../assets/images/it.png")},
  { id: "4", uri: require("../assets/images/marvel.png")},
  { id: "5", uri: require("../assets/images/dicsy.png")},  
  { id: "6", uri: require("../assets/images/capt.png")},
  { id: "7", uri: require("../assets/images/in.png")},
  { id: "8", uri: require("../assets/images/st.png")},
  { id: "9", uri: require("../assets/images/talent.png")},
];

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
    <View style={styles.collapsibleContainer}>
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleCollapsible1}>
          <Text style={styles.collapsibleHeaderText}>Programa de Promoción de Empleo</Text>
          <Ionicons name={isCollapsed1 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
        </TouchableOpacity>
        {!isCollapsed1 && (
          <View style={styles.content}>
            <ScrollView>
              <Text>El Programa de Promoción de Empleo a la Economía del Conocimiento en la Provincia de Córdoba tiene como objetivo crear 700 nuevos puestos de trabajo en actividades de alta tecnología. Ofrece una asignación estímulo de $15,000 por 6 meses a las empresas que contraten personal relacionado con estas actividades. Se prioriza a mujeres, personas con discapacidad, residentes en zonas desfavorables, trasplantados, personas trans y profesionales con doctorados o posdoctorados en disciplinas CTIM. Las empresas deben estar registradas y cumplir con requisitos de presentación de formularios y declaraciones juradas. El proceso de solicitud se realiza a través del sistema CiDi.</Text>
              <Text style={styles.linkText} onPress={() => Linking.openURL('https://cidi.cba.gov.ar')}>https://cidi.cba.gov.ar</Text>
            </ScrollView>
          </View>
        )}

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleCollapsible2}>
          <Text style={styles.collapsibleHeaderText}>Instructivo para inscripción al RECOR</Text>
          <Ionicons name={isCollapsed2 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
        </TouchableOpacity>
        {!isCollapsed2 && (
          <View style={styles.content}>
            <ScrollView>
              <Text>De conformidad a lo dispuesto por Ley N° 10.649, su modificatoria 10.722 y, Capítulo III, punto 3.1 del Anexo I Resolución N° 02/2021 de la Secretaría de Nuevas Tecnologías y Economía del Conocimiento del Ministerio de Ciencia y Tecnología de la Provincia de Córdoba, deberá presentarse la revalidación anual al Régimen de Promoción de Economía del Conocimiento de Córdoba a fines de demostrar la vigencia de la inscripción en el Registro Nacional para mantener su condición ante el Régimen Provincial. En esta validación, se ratifica o rectifica los datos y documentación presentados en la oportunidad de la inscripción al Registro.</Text>
              <Text style={styles.linkText}>Descarga de instructivo</Text>
              <Text style={styles.linkText}>Dicho trámite se debe realizar a través de la plataforma CIDI (https://cidi.cba.gov.ar/portal-publico/)</Text>
            </ScrollView>
          </View>
        )}

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleCollapsible3}>
          <Text style={styles.collapsibleHeaderText}>Beneficiario Provisorio</Text>
          <Ionicons name={isCollapsed3 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
        </TouchableOpacity>
        {!isCollapsed3 && (
          <View style={styles.content}>
            <ScrollView>
              <Text>El Registro de Beneficiarios del Régimen de Promoción de la Economía del Conocimiento de la Provincia de Córdoba (RECOR) permite a las empresas incorporarse provisionalmente mientras esperan la inscripción definitiva en el Registro Nacional. Se requiere obtener credenciales CiDi Nivel 2 y presentar la documentación necesaria.</Text>
              <Text>Para inscribirse como Beneficiario Provisorio en el RECOR, se debe designar representantes legales, reunir varios documentos y presentar la solicitud. Después de la presentación, se verifica la postulación y se solicita cualquier documentación adicional. </Text>
              <Text>Se proporciona un enlace con un modelo de formulario de solicitud en CiDi.</Text>
            </ScrollView>
          </View>
        )}

        <TouchableOpacity style={styles.collapsibleHeader} onPress={toggleCollapsible4}>
          <Text style={styles.collapsibleHeaderText}>Instructivo para inscripción al RECOR</Text>
          <Ionicons name={isCollapsed4 ? 'ios-arrow-down' : 'ios-arrow-up'} size={24} color="black" />
        </TouchableOpacity>
        {!isCollapsed4 && (
          <View style={styles.content}>
            <ScrollView>
              <Text>1. Obtener Credenciales CiDi Nivel 2: Regístrate en CiDi para obtener una cuenta.</Text>
              <Text>2. Gestionar Nivel 2 de CIDI: Sigue las instrucciones para obtener el Nivel 2 de CIDI.</Text>
              <Text>3. Designación como representante legal: Establece la relación entre el representante legal y la persona jurídica.</Text>
              <Text>4. Delegar permisos: Permite que otros usuarios tengan acceso a las aplicaciones necesarias.</Text>
              <Text>5. Requisitos de documentación: Prepara los documentos solicitados.</Text>
              <Text>6. Proceso de inscripción: Inicia el proceso utilizando las credenciales CiDi.</Text>
              <Text>7. Registro de Beneficios: Accede a la cuenta de Ciudadano Digital y sigue las instrucciones.</Text>
              <Text>Recuerda consultar las instrucciones detalladas proporcionadas en los enlaces correspondientes para completar el proceso de inscripción correctamente.</Text>
            </ScrollView>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <ScrollView horizontal={true}>
          <FlatList data={images} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item.uri} style={styles.image} />
              <Text style={styles.imageDescription}>{item.description}</Text>
            </View>
          )} />
        </ScrollView>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10, 
  },
  linkText: {
    color: 'blue',
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
    aspectRatio: 2, 
    resizeMode: "cover", 
    marginBottom: -10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 140, 
    marginLeft: 10,
    textAlign: "left",
    paddingBottom: 12, 
  },
  footer: {
    position: 'absolute',
    bottom: -30, // Ajusta este valor según sea necesario
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
  collapsibleContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  collapsibleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 14,
    height: 50,
  },
  collapsibleHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    flex: 2,
    marginLeft: 1,
  },
  content: {
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    paddingHorizontal: 20,
    height: "auto", // Remove the fixed height to make it adjust dynamically based on the content
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageDescription: {
    fontSize: 12,
    textAlign: 'center',
  },
});
