import React from "react";
import MapView from "react-native-maps";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tw from "twrnc";
const map = require("../assets/images/map.jpg");
import Icc from "react-native-vector-icons/MaterialCommunityIcons";
import Iconn from "react-native-vector-icons/Entypo";
import Ico from "react-native-vector-icons/Ionicons";
import Ic from "react-native-vector-icons/AntDesign";
export default function Map({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={map} style={tw`flex-1`} resizeMode="cover">
        <TouchableOpacity onPress={() => navigation.navigate("Delievery")}>
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
            <View style={tw`flex-row justify-between gap-r-10  items-center`}>
              <View
                style={tw`w-11 h-11 rounded-full bg-[#9460cd05] shadow-lg border-2 items-center justify-center border-[#9640cd05]`}
              >
                <Ico name="location-outline" size={30} color="#9460cd" />
              </View>

              <TextInput placeholder="Pickup Location" style={tw`pr-20 pl-5`} />
              <Icc name="record-circle-outline" size={30} color="#9460cd" />
            </View>
          </View>
        </View>
        <View style={tw`items-center pt-5`}>
          <View
            style={tw`w-83 h-14.5 bg-[#ffffff] rounded-[32] shadow-lg border-2 items-center justify-center border-[#ffffff]`}
          >
            <View style={tw`flex-row justify-between gap-r-10  items-center`}>
              <View
                style={tw`w-11 h-11 rounded-full bg-[#9460cd05] shadow-lg border-2 items-center justify-center border-[#9640cd05]`}
              >
                <Iconn name="location-pin" size={30} color="#9460cd" />
              </View>

              <TextInput
                placeholder="Where are you sending to?"
                style={tw`pr-10 pl-5`}
              />
            </View>
          </View>
          <View style={tw`my-80`}>
            <View
              style={tw`w-98.75 h-71 rounded-[15] bg-[#ffffff] shadow-lg border-2 items-center justify-center border-[#ffffff]`}
            >
              <View style={tw`items-center text-center`}>
                <Text style={tw`text-[#dadada] font-bold pb-20  text-3xl`}>
                  __
                </Text>
                <Text style={tw`text-[#9460cd] text-xl mt-[-40] font-bold`}>
                  Turn on Location
                </Text>
                <Text style={tw` text-center py-3`}>
                  Allow access to your location, to enable fast and {"\n"}
                  precise location.
                </Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                  <View
                    style={tw`w-35 bg-[#ffffff] my-5 h-11 justify-center  items-center rounded-lg`}
                  >
                    <Text style={tw`text-[#9460C4] text-lg`}>Cancel</Text>
                  </View>
                </TouchableOpacity>

                <View>
                  <TouchableOpacity onPress={() => navigation.navigate("Map2")}>
                    <View
                      style={tw`w-35 bg-[#9460C4]  h-11 justify-center  items-center rounded-lg`}
                    >
                      <Text style={tw`text-white text-lg`}>Continue</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
