import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  FlatList,
  Image,
  View,
  Input,
  Divider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";
import { Header } from "../components";

class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <ScrollView px={"25px"} py={"35px"}>
          <Text
            fontSize={"36px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            Halo!
          </Text>
          <Text fontSize={"20px"} color="#404040" textAlign="left">
            Selamat Datang
          </Text>
          <Separator height={"10"} />
          <Image
            bg="#F1F1F1"
            w={"280px"}
            h={"200px"}
            borderRadius={"10px"}
            source={require("../assets/login.png")}
          />
          <Separator height={"3"} />
          <Text pt={"5px"} fontSize={"14px"} color="#404040" textAlign="center">
            Silahkan masuk ke akun Anda, pilih media yang terhubung pada akun
            Anda
          </Text>
          <Box px={"30px"} py={"50px"}>
            <HStack space={"2"}>
              <Pressable
                w={"110px"}
                h={"40px"}
                borderWidth="2"
                borderRadius={"30px"}
                borderColor="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("Login2")}
              >
                <HStack space={"1"} py={"5px"} px={"17px"}>
                  <Ionicons
                    name="md-phone-portrait-outline"
                    size={22}
                    color="#47B04A"
                  />
                  <Text
                    fontSize={"12px"}
                    color="#000000"
                    textAlign="center"
                    py={"3px"}
                  >
                    No. Telp
                  </Text>
                </HStack>
              </Pressable>
              <Divider mx={1} orientation="vertical" />
              <Pressable
                w={"110px"}
                h={"40px"}
                borderWidth="2"
                borderRadius={"30px"}
                borderColor="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("LostKoneksi")}
              >
                <HStack space={"1"} py={"5px"} px={"17px"}>
                  <Ionicons name="ios-logo-google" size={22} color="#47B04A" />
                  <Text
                    fontSize={"12px"}
                    color="#000000"
                    textAlign="center"
                    py={"3px"}
                  >
                    Google
                  </Text>
                </HStack>
              </Pressable>
            </HStack>
          </Box>
          <Separator height={"3"} />
          <Image
            w={"150px"}
            h={"60px"}
            alignSelf="center"
            source={require("../assets/ITTSMART.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Login;
