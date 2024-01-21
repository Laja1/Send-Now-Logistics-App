import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icn from "react-native-vector-icons/Feather";
import Ic from "react-native-vector-icons/MaterialIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Delievery from "./Delievery";
import Exp from "./Exp";
import Map from "./Map";
import Map2 from "./Map2";
import Sendnow from "./Sendnow";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import tw from "twrnc";
export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Icon name="home-variant" size={30} color="#9460C4" />
          ),
        }}
      />
      <Tab.Screen
        name="Delievery"
        component={Delievery}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={tw`opacity-25`}>
              <Icn name="file-text" size={20} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Exp"
        component={Exp}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={tw`opacity-25`}>
              <Ic name="track-changes" size={20} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sendnow"
        component={Sendnow}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={tw`opacity-25`}>
              <Icn name="user" size={20} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default class Landing extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
        <Stack.Screen
          name="Map2"
          component={Map2}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
      </Stack.Navigator>
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
