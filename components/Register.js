import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  SafeAreaVieweOpacity,
  TextComponent,
} from "react-native";
import CheckBox from "react-native-check-box";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import tw from "twrnc";

function Register({ navigation }) {
  const [isChecked, setChecked] = useState(false);

  boxCheck = () => {
    setToggleCheckBox(!toggleCheckBox);
  };
  return (
    <SafeAreaView style={{}}>
      <View style={tw`flex flex-row gap33 p-5`}>
        <TouchableOpacity onPress={() => navigation.navigate("Exp")}>
          <Ionicons name="arrow-back-outline" size={20} />
        </TouchableOpacity>
        <Text style={tw`font-bold text-[16px] `}>Register</Text>
      </View>

      <View style={tw`items-center`}>
        <Text style={tw`text-[#9460C4] font-bold `}>
          Sign Up for an account
        </Text>
      </View>
      <View style={tw`items-center py-5 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]  border-1.25 shadow-lg   w-80  justify-center h-15.5`}
        >
          <Text style={tw`text-[#00000080] text-[14px] text-left pr-51.5`}>
            Full Name
          </Text>
          <TextInput
            placeholder="Enter Here"
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View style={tw`items-center py-2 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]  border-1.25 shadow-lg   w-80  justify-center h-15.5`}
        >
          <Text style={tw`text-[#00000080] text-[14px] text-left pr-44.5`}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Here"
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View style={tw`items-center py-2 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]  border-1.25 shadow-lg   w-80  justify-center h-25.5`}
        >
          <Text
            style={tw`text-[#00000080] text-[14px] text-left mt-[-25] pr-47.5`}
          >
            Full Address
          </Text>
          <TextInput
            placeholder="Enter Here"
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View style={tw`items-center py-2 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]  border-1.25 shadow-lg   w-80  justify-center h-15.5`}
        >
          <Text style={tw`text-[#00000080] text-[14px] text-left pr-51.5`}>
            Full Name
          </Text>
          <TextInput
            placeholder="Enter Here"
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View style={tw`items-center py-2 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]    border-1.25 shadow-lg   w-80  justify-center h-15.5`}
        >
          <Text style={tw`text-[#00000080] text-[14px] text-left pr-51.5`}>
            Password
          </Text>
          <TextInput
            placeholder="Enter Here"
            secureTextEntry
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View style={tw`items-center py-2 text-[#9460C4]`}>
        <View
          style={tw`items-center rounded-[12px]  border-1.25 shadow-lg   w-80  justify-center h-15.5`}
        >
          <Text style={tw`text-[#00000080] text-[14px] text-left pr-38.5`}>
            Confirm Password
          </Text>
          <TextInput
            placeholder="Enter Here"
            secureTextEntry
            placeholderTextColor="#000000"
            style={tw` text-[14px] text-left pr-50`}
          />
        </View>
      </View>
      <View
        style={tw`flex-row flex-wrap px-7 pt-3  items-center justify-center w-80`}
      >
        <CheckBox
          style={tw`flex-1 `}
          onClick={() => setChecked(!isChecked)}
          isChecked={isChecked}
        />
        <Text style={tw`text-[12px]`}>
          By creating an account, you agree to our
        </Text>
        <Text style={tw`text-[#9460C4] pr-19.5 text-[12px]`}>
          {" "}
          Terms and Conditions
        </Text>
      </View>
      <View style={tw`items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
          <View
            style={tw`w-80 bg-[#9460C4] my-5 h-14.5 justify-center  items-center rounded-lg`}
          >
            <Text style={tw`text-white`}>Create Account</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row flex justify-center`}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={tw`text-[#9460C4]`}> Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

export default Register;
