import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CadastroUser from "./components/cadastroUser";
import Lance from "./components/Lance";
import ItemLeilao from "./components/ItemLeilao";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Cadastro"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Cadastro") {
              iconName = "account-plus";
            } else if (route.name === "Lance") {
              iconName = "clipboard-play";
            } else if (route.name === "ItemLeilao") {
              iconName = "clipboard-play";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#f64",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Cadastro" component={CadastroUser} />
        <Tab.Screen name="Lance" component={Lance} />
        <Tab.Screen name="Leilão" component={ItemLeilao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
