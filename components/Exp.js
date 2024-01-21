import React from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
const Waves = require("../assets/images/Waves.png");
const pana = require("../assets/images/pana.png");
const pana2 = require("../assets/images/pana2.png");
const group2 = require("../assets/images/group2.png");
import Swiper from "react-native-swiper";
import tw from "twrnc";

const Exp = ({ navigation }) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      paginationStyle={styles.pagination}
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide1}>
        <Image source={Waves} style={tw`w-100`} />
        <View style={tw`justify-center py-50 items-center text-center`}>
          <Text style={tw`text-[30px] font-bold justify-center`}>
            Seamless & Affordable
          </Text>
          <Text style={tw`text-center`}>
            Experience seamless and cost-effective {"\n"}delivery service, very
            affordable and no {"\n"}extra delay charges.
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={tw`px-70`}>
            <View
              style={tw`bg-[#C16CCF30] w-17.25 h-10.25 justify-center my-[-150] items-center rounded-[32px] `}
            >
              <Text style={tw`text-[#B978F5]`}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={tw`my-[-100]`}>
          <Image source={pana} />
        </View>
      </View>
      <View style={styles.slide2}>
        <View style={styles.slide1}>
          <Image source={Waves} style={tw`w-100`} />
          <View style={tw`justify-center py-50 items-center text-center`}>
            <Text style={tw`text-[30px] font-bold justify-center`}>
              Intact Packages
            </Text>
            <Text style={tw`text-center`}>
              Let us take responsibility of bringing your {"\n"}packages intact
              & promptly. {"\n"}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <View style={tw`px-70`}>
              <View
                style={tw`bg-[#C16CCF30] w-17.25 h-10.25 justify-center my-[-150] items-center rounded-[32px] `}
              >
                <Text style={tw`text-[#B978F5]`}>Skip</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={tw`my-[-100] px-10`}>
            <Image source={group2} />
          </View>
        </View>
      </View>
      <View style={styles.slide3}>
        <Image source={Waves} style={tw`w-100`} />
        <View style={tw`justify-center py-50 items-center text-center`}>
          <Text style={tw`text-[30px] font-bold justify-center`}>
            Doorstep delivery
          </Text>
          <Text style={tw`text-center`}>
            We provide doorstep delivery service to all {"\n"}locations
            nationwide..
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={tw`px-70`}>
            <View
              style={tw`bg-[#C16CCF30] w-17.25 h-10.25 justify-center my-[-150] items-center rounded-[32px] `}
            >
              <Text style={tw`text-[#B978F5]`}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={tw`my-[-80] px-10`}>
          <Image source={pana2} />
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  slide2: {
    flex: 1,

    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
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
    bottom: 400, // Adjust this value as needed
  },
});
export default Exp;
