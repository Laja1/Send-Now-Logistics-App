import React from "react";
const mage = require("../assets/images/Image.png");
const Rider = require("../assets/images/Rider.png");
import tw from "twrnc";
import Swiper from "react-native-swiper";
import {
  View,
  Text,
  AppRegistry,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function Onboarding({ navigation }) {
  return (
    <View style={tw`py-20 `}>
      <View style={tw`mx-60`}>
        <View style={tw`w-76 rounded-full h-76 bg-[#9460C4]`}></View>
      </View>
      <View style={tw`my-[190px] absolute `}>
        <Image source={Rider} style={tw` `} />
      </View>
      <View style={tw`mx-[-80px]`}>
        <View style={tw`w-51 rounded-full h-51 bg-[#C5A3BF99]`}></View>
      </View>
      <View style={tw`items-center text-center`}>
        <Text style={tw`text-2xl font-bold`}>Welcome to SendNow!</Text>

        <Text style={tw`text-center`}>
          Providing the fastest & cheapest delivery {"\n"}service
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Exp")}>
          <View
            style={tw`w-80 bg-[#9460C4] my-10 h-14.5 justify-center items-center rounded-lg`}
          >
            <Text color={"#ffffff"}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Onboarding;
