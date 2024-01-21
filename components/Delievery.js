import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
const bike = require("../assets/images/bike.png");
const png = require("../assets/images/png.png");
const png1 = require("../assets/images/png1.png");
import Swiper from "react-native-swiper";

import Ico from "react-native-vector-icons/Ionicons";
import Ic from "react-native-vector-icons/AntDesign";

import tw from "twrnc";

export default function Delievery({ navigation }) {
  return (
    <SafeAreaView>
      <View style={tw`flex  flex-row items-center justify-between px-5`}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View
            style={tw`w-11 h-11 rounded-lg shadow-lg border-2 items-center justify-center border-[#ffffff]`}
          >
            <Ic name="arrowleft" size={20} />
          </View>
        </TouchableOpacity>
        <Text style={tw` text-xl text-[#9460c4]`}>Send Package</Text>

        <View
          style={tw`w-11 h-11 rounded-lg shadow-lg border-2 items-center justify-center border-[#ffffff]`}
        >
          <Ico name="notifications-outline" size={20} />
        </View>
      </View>
      <View style={tw`items-center pt-5`}>
        <Text>Choose vehicle type that suits your needs.</Text>
      </View>
      <View style={tw`flex-row justify-between pt-5 px-10`}>
        <View
          style={tw`w-37.5 h-42.5 rounded-[32px] shadow-xl border-2 items-center justify-center border-[#9460c4]`}
        >
          <View
            style={tw`w-11 h-11 bg-[#9460c430] rounded-lg shadow-lg border-2 items-center justify-center border-[#9460c430]`}
          >
            <Text style={tw`text-lg text-[#9460c4]`}>+</Text>
          </View>
          <Text style={tw`text-[#C4C4C4] pb-1`}>_________</Text>
          <Text>Any of these</Text>
        </View>
        <View
          style={tw`w-37.5 h-42.5  rounded-[32px] shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Image source={bike} />
          <Text style={tw`text-[#C4C4C4] pb-1`}>_________</Text>
          <Text>Bike</Text>
          <Text style={tw`text-xs`}>For 1Kg - 10kg</Text>
        </View>
      </View>
      <View style={tw`flex-row justify-between pt-5 px-10`}>
        <View
          style={tw`w-37.5 h-42.5  rounded-[32px] shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Image source={png} />
          <Text style={tw`text-[#C4C4C4] pb-1`}>_________</Text>
          <Text>Bike</Text>
          <Text style={tw`text-xs`}>For 1Kg - 10kg</Text>
        </View>
        <View
          style={tw`w-37.5 h-42.5  rounded-[32px] shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Image source={png1} />
          <Text style={tw`text-[#C4C4C4] pb-1`}>_________</Text>
          <Text>Bike</Text>
          <Text style={tw`text-xs`}>For 1Kg - 10kg</Text>
        </View>
      </View>
      <Text style={tw`text-[#9460c4] font-bold text-lg px-8 pt-7 pb-2`}>
        Delivery Duration
      </Text>
      <View style={tw`flex-row justify-between px-8`}>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 24 hours</Text>
        </View>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 3 days</Text>
        </View>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 5 days</Text>
        </View>
      </View>
      <View style={tw`flex-row justify-between px-8 pt-3`}>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 24 hours</Text>
        </View>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 3 days</Text>
        </View>
        <View
          style={tw`w-25.5 h-9.5  rounded-lg shadow-xl border-2 items-center justify-center border-[#ffffff]`}
        >
          <Text>In 5 days</Text>
        </View>
      </View>

      <View style={tw`items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <View
            style={tw`w-80 bg-[#9460C4] my-5 h-14.5 justify-center  items-center rounded-lg`}
          >
            <Text style={tw`text-white text-lg`}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  activeDot: {
    backgroundColor: "#B978F5", // Purple color
    width: 12,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  pagination: {
    bottom: "-100%", // Adjust this value as needed
  },
});
