import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import PerfilScreen from "../screens/PerfilScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import TabOneScreen from "../screens/TabOneScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Inicio"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}/>

      <BottomTab.Screen
        name="Noticias"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="newspaper" color={color} />
          ),        

        }}
      />
       <BottomTab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-sharp" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Inicio"
        component={TabOneScreen}
        options={{ headerTitle: "Inicio" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Noticias"
        component={TabTwoScreen}
        options={{ headerTitle: "Noticias" }}
      />
    </TabTwoStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();

function PerfilNavigator() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ headerTitle: "Perfil" }}
      />
    </PerfilStack.Navigator>
  );
}
