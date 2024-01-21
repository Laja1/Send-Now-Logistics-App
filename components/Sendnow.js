import React from "react";
const Load = require("../assets/images/Loading.png");
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
function Sendnow({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
      <View style={tw`bg-[#9460c4] py-100 items-center`}>
        <Text style={tw`text-white text-[24px]`}>SendNow</Text>
        <Image source={Load} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default Sendnow;
