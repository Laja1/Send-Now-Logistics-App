import React from "react";
import MapView from "react-native-maps";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
const map = require("../assets/images/map.jpg");
const direction = require("../assets/images/direction.png");
import Icc from "react-native-vector-icons/MaterialCommunityIcons";
import Iconn from "react-native-vector-icons/Entypo";
import Ico from "react-native-vector-icons/Ionicons";
import Ic from "react-native-vector-icons/AntDesign";
export default function Map2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={map} style={tw`flex-1`} resizeMode="cover">
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <View style={tw`pl-2 pb-5`}>
            <View
              style={tw`w-11 h-11 rounded-lg shadow-lg border-2 items-center justify-center border-[#ffffff]`}
            >
              <Ic name="arrowleft" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={tw`items-center`}>
          <View
            style={tw`w-83 h-14.5 bg-[#ffffff] rounded-[32] shadow-lg border-2 items-center justify-center border-[#ffffff]`}
          >
            <View style={tw`flex-row justify-between gap-r-10 5 items-center`}>
              <View
                style={tw`w-11 h-11 rounded-full bg-[#9460cd05] shadow-lg border-2 items-center justify-center border-[#9640cd05]`}
              >
                <Ico name="location-outline" size={30} color="#9460cd" />
              </View>

              <TextInput
                placeholder="26, Olive street, Ojota, Lagos"
                placeholderTextColor="black"
                style={tw`pr-5 pl-5`}
              />
              <Icc name="record-circle-outline" size={30} color="#9460cd" />
            </View>
          </View>
        </View>
        <View style={tw`items-center pt-5`}>
          <View
            style={tw`w-83 h-14.5 bg-[#ffffff] rounded-[32] shadow-lg border-2 items-center justify-center border-[#ffffff]`}
          >
            <View style={tw`flex-row justify-between gap-r-10 5 items-center`}>
              <View
                style={tw`w-11 h-11 rounded-full bg-[#9460cd05] shadow-lg border-2 items-center justify-center border-[#9640cd05]`}
              >
                <Iconn name="location-pin" size={30} color="#9460cd" />
              </View>

              <TextInput
                placeholder="53, Maldive, Apapa, Lagos"
                placeholderTextColor="black"
                style={tw`pr-15 pl-5`}
              />
            </View>
          </View>
        </View>
        <View style={tw`absolute my-60 ml-30`}>
          <Image source={direction} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
