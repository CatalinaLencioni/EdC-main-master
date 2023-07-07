import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import PerfilScreen from "../screens/PerfilScreen";
import EmpresaScreen from "../screens/EmpresaScreen";
import MarcoLegalScreen from "../screens/MarcoLegalScreen";
import BeneficiosScreen from "../screens/BeneficiosScreen";
import InstructivoScreen from "../screens/InstructivoScreen";
import BeneficiarioProvScreen from "../screens/BeneficiarioProvScreen";
import InsValidScreen from "../screens/InsValidScreen";
import PregFrecScreen from "../screens/PregFrecScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="PerfilScreen"
        component={PerfilScreen}
        options={{
          headerShown: true,
          title: "Perfil",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="EmpresaScreen"
        component={EmpresaScreen}
        options={{
          headerShown: true,
          title: "Empresas Cordobesas ",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="MarcoLegalScreen"
        component={MarcoLegalScreen}
        options={{
          headerShown: true,
          title: "Marco Legal ",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="BeneficiosScreen"
        component={BeneficiosScreen}
        options={{
          headerShown: true,
          title: "BeneficiosScreen ",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="InstructivoScreen"
        component={InstructivoScreen}
        options={{
          headerShown: true,
          title: "InstructivoScreen ",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="BeneficiarioProvScreen"
        component={BeneficiarioProvScreen}
        options={{
          headerShown: true,
          title: "BeneficiarioProvScreen",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="InsValidScreen"
        component={InsValidScreen}
        options={{
          headerShown: true,
          title: "",
          headerBackTitle: "Volver",
        }}
      />
       <Stack.Screen
        name="PregFrecScreen"
        component={PregFrecScreen}
        options={{
          headerShown: true,
          title: "Preguntas Frecuentes ",
          headerBackTitle: "Volver",
        }}
      />
      <Stack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerShown: true,
          title: "",
          headerBackTitle: "Volver",
        }}
      />
    </Stack.Navigator>
    
  );
}
