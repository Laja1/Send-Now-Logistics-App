import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Ico from "react-native-vector-icons/Ionicons";
import Ic from "react-native-vector-icons/AntDesign";
import Iconn from "react-native-vector-icons/Entypo";
import tw from "twrnc";

const circle = require("../assets/images/Circle.png");
const cir = require("../assets/images/cir.png");
const cir2 = require("../assets/images/cir2.png");
const Dots = require("../assets/images/Dots.png");
const cir3 = require("../assets/images/cir3.png");
export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={tw`items-center`}>
        <Text>Current Location</Text>
      </View>
      <View style={tw`flex  flex-row items-center justify-between px-5`}>
        <Icon name="menu" size={20} />
        <Text style={tw`font-bold text-xl`}>Lagos, Nigeria</Text>
        <Ico name="notifications-outline" size={20} />
      </View>

      <View style={tw`pl-5 pt-3 pb-5`}>
        <Text style={tw`font-bold text-lg text-[#9460c4]`}>Hi, Cynthia</Text>
        <Text style={tw` text-base `}>
          Relax while we help with your logistics..
        </Text>
      </View>
      <View style={tw`items-center justify-center`}>
        <Text style={tw`font-bold text-xl text-[#212121] pb-3`}>
          Track your Package here👇🏼
        </Text>
        <View style={tw`items-center justify-center`}>
          <View style={tw`w-78 shadow-2xl bg-[#9460C452] px-5 rounded-[30]`}>
            <View style={tw`flex-row items-center gap-5 `}>
              <Icon name="package" size={30} color="#8E8787" />
              <TextInput placeholder="Enter your tracking number" />
              <View
                style={tw`w-12.5 h-12.5 bg-[#9460c4] rounded-full items-center justify-center`}
              >
                <Ic name="scan1" size={30} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`pl-5 pt-5 pb-5`}>
        <Text style={tw`font-bold text-xl text-[#212121]`}>
          What are you looking at doing today?
        </Text>
      </View>

      <View style={tw`flex-row items-center justify-between px-4`}>
        <View style={tw`w-44  h-45 rounded-[7] border-[#A76CDD] border-2`}>
          <View style={tw`flex-col pl-2 pt-2 gap-2`}>
            <Image source={circle} />
            <Text style={tw`text-[#9460c4]`}>
              Riders are available to help send your package
            </Text>
            <View style={tw`pt-8`}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Delievery")}
              >
                <View
                  style={tw`w-31   h-7 rounded-[3] bg-[#9460c4] items-center justify-center border-[#A76CDD] border-2`}
                >
                  <Text style={tw`text-white `}>Send Package</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw`w-44  h-45 rounded-[7] border-[#D0913D] border-2`}>
          <View style={tw`flex-col pl-2 pt-2 gap-2`}>
            <Image source={cir} />
            <Text style={tw`text-[#9460c4]`}>
              Riders are available to help receive your package and deliver to
              you.
            </Text>
            <View
              style={tw`w-31  h-7 rounded-[3] bg-[#D0913D] items-center justify-center border-[#D0913D] border-2`}
            >
              <Text style={tw`text-white`}>Receive Package</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tw`pl-5 pt-2 pb-2`}>
        <Text style={tw`font-bold text-xl text-[#212121]`}>
          Recent Activity
        </Text>
      </View>

      <View style={tw`flex-row items-center justify-between px-3`}>
        <View
          style={tw`w-45  h-50 rounded-[7] shadow-2xl border-[#ffffff] border-2`}
        >
          <View style={tw`flex-row pl-2 pt-2 gap-2`}>
            <Image source={cir2} />
            <View style={tw`flex-col flex`}>
              <Text style={tw`text-[#9460c4] text-xs`}>My Package</Text>
              <Text style={tw`text-[#9460c4]`}>25kg</Text>
            </View>
            <View
              style={tw`w-9  h-7 rounded-[2] bg-[#ffffff] items-center justify-center border-[#ffffff] shadow-2xl border-2`}
            >
              <Text style={tw`text-black text-[7px]`}>TRACK</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center  gap-4 pt-5 justify-center`}>
            <Ico name="wallet-outline" size={15} />
            <Text>#2500</Text>
            <Text style={tw`text-[#189E35] text-[9px]`}>· Paid</Text>
          </View>

          <Text style={tw`text-[7px] mt-[5]`}>
            Estimated Delivery Date 24th Feb,2021 - 10;45am
          </Text>
          <View style={tw`pl-2 flex-row mt-[-20]`}>
            <Text style={tw`text-[#9460c4] font-bold text-3xl`}>__</Text>
            <Text style={tw`text-[#9460c4] font-bold text-3xl`}>__</Text>
            <Text style={tw`text-[#9460c4] font-bold text-3xl`}>__</Text>
          </View>
          <View style={tw`flex-col justify-center items-center`}>
            <View style={tw`flex-row gap-1 justify-center items-center`}>
              <Ico name="location-outline" size={15} />
              <Text style={tw` text-[7px]`}>
                No 23, Ogunaike street, Ikeja, Lagos
              </Text>
            </View>
            <View style={tw` mr-[132]`}>
              <Image source={Dots} />
            </View>
            <View style={tw`flex-row gap-1 justify-center items-center mr-2`}>
              <Iconn name="location-pin" size={17} />
              <Text style={tw` text-[7px]`}>
                No 89, Joyce Estate, Mowe, Lagos
              </Text>
            </View>
          </View>
        </View>
        <View
          style={tw`w-45  h-50 rounded-[7] shadow-2xl border-[#ffffff] border-2`}
        >
          <View style={tw`flex-row pl-2 pt-2 gap-2`}>
            <Image source={cir3} />
            <View style={tw`flex-col flex`}>
              <Text style={tw`text-[#9460c4] text-xs`}>My Package</Text>
              <Text style={tw`text-[#9460c4]`}>25kg</Text>
            </View>
            <View
              style={tw`w-9  h-7 rounded-[2] bg-[#ffffff] items-center justify-center border-[#ffffff] shadow-2xl border-2`}
            >
              <Text style={tw`text-black text-[7px]`}>TRACK</Text>
            </View>
          </View>
          <View style={tw`flex-row items-center  gap-2 pt-5 justify-center`}>
            <Ico name="wallet-outline" size={15} />
            <Text>#2500</Text>
            <Text style={tw`text-[#7B86F6] text-[7px]`}>· Pay on delivery</Text>
          </View>

          <Text style={tw`text-[7px] mt-[5]`}>
            Estimated Delivery Date 24th Feb,2021 - 10;45am
          </Text>
          <View style={tw`pl-2 flex-row mt-[-20]`}>
            <Text style={tw`text-[#E1AC65] font-bold text-3xl`}>__</Text>
            <Text style={tw`text-[#E1AC65] font-bold text-3xl`}>__</Text>
            <Text style={tw`text-[#E1AC65] font-bold text-3xl`}>__</Text>
          </View>
          <View style={tw`flex-col justify-center items-center`}>
            <View style={tw`flex-row gap-1 justify-center items-center`}>
              <Ico name="location-outline" size={15} />
              <Text style={tw` text-[7px]`}>
                No 23, Ogunaike street, Ikeja, Lagos
              </Text>
            </View>
            <View style={tw` mr-[132]`}>
              <Image source={Dots} />
            </View>
            <View style={tw`flex-row gap-1 justify-center items-center mr-2`}>
              <Iconn name="location-pin" size={18} />
              <Text style={tw` text-[7px]`}>
                No 89, Joyce Estate, Mowe, Lagos
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
