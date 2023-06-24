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

class Login2 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <Image
          w={"360px"}
          h={"250px"}
          alignSelf="center"
          source={require("../assets/bg.jpg")}
        />
        <ScrollView py={"20px"} px={"25px"}>
          <Text
            fontSize={"30px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            Masuk
          </Text>
          <Separator height={"2"} />
          <Text
            p={"5px"}
            fontSize={"14px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            No. Telepon
          </Text>
          <Input
            w={"310px"}
            h={"40px"}
            borderWidth="2"
            borderRadius={"30px"}
            borderColor="#47B04A"
            alignSelf="center"
            placeholder="Masukkan nomor telepon"
          />
          <Separator height={"70"} />
          <Pressable
            w={"310px"}
            h={"40px"}
            borderRadius={"30px"}
            bg="#47B04A"
            alignSelf="center"
            onPress={() => navigation.navigate("Berandas")}
          >
            <Text
              fontSize={"12px"}
              color="#FFFFFF"
              textAlign="center"
              py={"8px"}
            >
              Masuk
            </Text>
          </Pressable>
          <Box py={"10px"} px={"20px"}>
            <HStack space={"3"}>
              <Divider mt={"10px"} w={"70px"} bg="#959595" />
              <Text fontSize={"12px"} color="#959595">
                Atau masuk dengan
              </Text>
              <Divider mt={"10px"} w={"70px"} bg="#959595" />
            </HStack>
          </Box>
          <Separator height={"2"} />
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
          <Separator height={"70"} />
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

export default Login2;
