import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, Image } from 'react-native';

const noticias = [
  { 
    id: '1', 
    titulo: 'Plataforma e-Sports Córdoba', 
    descripcion: 'Iniciativa del Gobierno de Córdoba para impulsar los deportes electrónicos en la provincia', 
    contenido: "Descripción de la plataforma e-Sports Córdoba y su lanzamiento durante la entrega de los Premios Cóndor en diciembre de 2022. Creación del Programa e-Sports Córdoba por el Gobierno de Córdoba en colaboración con la Agencia Córdoba Deportes y la Agencia Córdoba Joven. Objetivos de la plataforma e-Sports Córdoba, que busca facilitar el desarrollo y fortalecimiento de los diferentes actores del ecosistema de los deportes electrónicos en la provincia. Desarrollo de la plataforma en colaboración con Capabilia, una empresa especializada en innovación y desarrollo tecnológico enfocada en contenido educativo para organizaciones deportivas. Funcionalidades de la plataforma, que incluyen cursos de formación en gestión deportiva y e-Sports, videos con contenido académico sobre buenas prácticas y hábitos saludables, set de videos sobre la conformación y construcción de equipos de e-Sports, blog con contenido sobre la industria de los deportes electrónicos y la información e inscripciones para los diferentes eventos del Programa e-Sports Córdoba.",
    Image: 'https://mincyt.cba.gov.ar/como-es-la-plataforma-e-sports-cordoba/#iLightbox[gallery21019]/0'
  },
  { 
    id: '2', 
    titulo: 'PIL', 
    descripcion: 'El PIL brindará 300 nuevas oportunidades de empleo en la industria del software',
    contenido: 'El Programa de Inserción Laboral en Nuevas Tecnologías (PIL) de la provincia de Córdoba en Argentina, busca generar 300 nuevos empleos en la industria del software y formar recursos humanos en tecnología. Los postulantes seleccionados recibirán una asignación estímulo de 37 mil pesos, y podrán inscribirse personas sin límite de edad con conocimientos digitales y secundario completo. La iniciativa estará coordinada por los ministerios de Promoción del Empleo y Formación Profesional, Educación y Ciencia y Tecnología, junto al Córdoba Technology Cluster.',
    contenido: 'Como novedad, se incorpora la formación en idioma inglés de manera obligatoria para todos los participantes. El programa tendrá instancias de capacitación teórica-práctica con un total de al menos 250 horas distribuidas en los primeros seis meses y prácticas laborales de 20 horas semanales por 12 meses. El gobierno provincial financiará el 80% de la asignación estímulo durante los primeros 6 meses para los beneficiarios que residan en localidades de menos de 60.000 habitantes y no deban trasladarse, y para beneficiarias mujeres. El plazo de inscripción para las empresas es del 16 de febrero al 10 de marzo, mientras que la postulación de candidatos será del 17 de marzo al 21 de abril, y la capacitación y práctica laboral comenzarán el 2 de mayo.',
  
  },
    { 
    id: '3', 
    titulo: 'ReinventarTEC 2023: inspirar a mujeres para ingresar al mundo de la tecnología', 
    descripcion: 'El próximo 14 de marzo se pondrá en marcha una nueva edición de ReinventarTEC, esta iniciativa que se propone inspirar a mujeres de todas las edades y profesiones, invitándolas a reinventarse e inmiscuirse profesionalmente en el mundo de la industria tecnológica.', 
    contenido: 'En cada encuentro semanal se dialogará con representantes de las distintas organizaciones de la comunidad vinculadas a mujeres y diversidades en tecnología, abordando de manera práctica diversas áreas y temáticas de la industria tech. Así, esta propuesta promueve la sinergia entre comunidades, organizaciones y clusters que trabajan la inserción de mujeres y género en tecnología, a partir del diálogo y la articulación conjunta de conocimientos y habilidades.Todos los talleres son totalmente gratuitos, y conforman un espacio para aquellas mujeres que desean reconvertirse y desarrollarse profesionalmente y emprender en el mundo de la tecnología. Las temáticas propuestas se encuentran vinculadas a historias de reconversión al mundo tecnológico, Product Management, UX, Desarrollo Web, Programación, Ciberseguridad, Soporte Técnico, entre otras. La mitad de estos talleres se dictará de manera virtual como se viene haciendo desde el año 2020 y la otra mitad será presencial en la ciudad de Córdoba, San Francisco, Río Cuarto y Villa María. El ciclo propone talleres introductorios que se desarrollarán los días martes y jueves de 17:00 a 18:30 horas, durante los meses de marzo y abril. Quienes participen podrán hacerlo ingresando al canal de YouTube del Ministerio de Ciencia y Tecnología y de MeT [Mujeres en Tecnología]. Además se podrá participar de manera presencial en algunos de los talleres. Esta cuarta edición es impulsada por el Gobierno de Córdoba a través del Ministerio de Ciencia y Tecnología y el Ministerio de la Mujer, junto a MeT [Mujeres en Tecnología], instituciones que trabajan género y tecnología, los clusters tecnológicos cordobeses y la Asociación de Videojuegos de Argentina.',
    titulo: 'ReinventarTec Cuarta Edición',
    contenido: 'En los últimos tres años han pasado por los 30 talleres de ReinventarTec más de 7700 personas de todas las provincias de Argentina y distintos países del mundo. El lanzamiento se realizará el próximo 14 de marzo, con el desarrollo del primero de los talleres previstos: “Reinventarse en Tecnología: un camino en comunidad”, donde se expondrán las historias y experiencias de referentes del sector. El acceso a las actividades es totalmente libre y gratuito '
  }
];

export default function PantallaDeNoticias() {
  const [data, setData] = useState(noticias);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState({});

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => {setSelectedNoticia(item); setModalVisible(true)}}
    >
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  const renderModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {setModalVisible(false); setSelectedNoticia({})}}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitulo}>{selectedNoticia.titulo}</Text>
          <Text style={styles.modalContenido}>{selectedNoticia.contenido}</Text>
          <TouchableOpacity 
            style={styles.modalCerrar} 
            onPress={() => {setModalVisible(false); setSelectedNoticia({})}}
          >
            <Text style={styles.modalCerrarTexto}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {renderModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#87CEFA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 16,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20
  },
  logo: {
    width: 900,
    height: 150,
    resizeMode: 'contain',
    justifyContent: "center",
  }
}); 