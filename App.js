import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./components/Register";
import Packages from "./components/Home";
import Sendnow from "./components/Sendnow";
import Exp from "./components/Exp";
import Onboarding from "./components/Onboarding";
import Login from "./components/Login";
import Landing from "./components/Landing";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Sendnow"
            component={Sendnow}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Packages"
            component={Packages}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Exp"
            component={Exp}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
