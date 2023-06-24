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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";
import { Header } from "../components";

class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <ScrollView p={"10px"}>
          <Input
            px={"10px"}
            bg="#F1F1F1"
            w={"100%"}
            h={"45px"}
            borderRadius={"30px"}
            size="lg"
            placeholder="Cari Produk"
          />
          <Box w={"355px"} h={"175px"}>
            <HStack p={"10px"} space={"10px"}>
              <Image
                w={"275px"}
                h={"150px"}
                borderRadius={"20px"}
                shadow="4"
                source={require("../assets/Slide1.jpg")}
              />
              <Image
                w={"275px"}
                h={"150px"}
                borderRadius={"20px"}
                shadow="4"
                source={require("../assets/Slide2.jpg")}
              />
            </HStack>
          </Box>
          <Separator height={"3"} />
          <Box pt={"15px"} px={"10px"}>
            <HStack>
              <Text
                fontSize={"19px"}
                color="#000000"
                fontWeight="bold"
                textAlign="left"
              >
                Hot Deals <Ionicons name="flame" size={22} color="#47B04A" />
              </Text>
              <Pressable onPress={() => navigation.navigate("Katalog")}>
                <Text
                  ml={"130px"}
                  py={"5px"}
                  fontSize={"12px"}
                  color="#000000"
                  textAlign="right"
                >
                  See all
                </Text>
              </Pressable>
            </HStack>
          </Box>
          <Box w={"345px"} h={"258px"}>
            <HStack px={"10px"} py={"15px"} space={"5%"}>
              <Pressable
                bg="#FFFFFF"
                w={"140px"}
                h={"229px"}
                shadow="2"
                borderRadius={"10px"}
                onPress={() => navigation.navigate("Detail")}
              >
                <VStack>
                  <Image
                    bg="#F1F1F1"
                    w={"100%"}
                    h={"153px"}
                    borderRadius={"10px"}
                    source={require("../assets/pisang.jpeg")}
                  />
                  <Box px={"10px"} py={"10px"}>
                    <Text
                      fontSize={"14px"}
                      color="#404040"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      Pisang
                    </Text>
                    <Text fontSize={"9px"} color="#B3B3B3" textAlign="left">
                      450 gr
                    </Text>
                    <Text
                      fontSize={"10px"}
                      color="#000000"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      Rp 10.000
                    </Text>
                  </Box>
                </VStack>
              </Pressable>
              <Pressable
                bg="#FFFFFF"
                w={"140px"}
                h={"229px"}
                shadow="2"
                borderRadius={"10px"}
                onPress={() => navigation.navigate("Detail")}
              >
                <VStack>
                  <Image
                    bg="#F1F1F1"
                    w={"100%"}
                    h={"153px"}
                    borderRadius={"10px"}
                    source={require("../assets/pisang.jpeg")}
                  />
                  <Box px={"10px"} py={"10px"}>
                    <Text
                      fontSize={"14px"}
                      color="#404040"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      Pisang
                    </Text>
                    <Text fontSize={"9px"} color="#B3B3B3" textAlign="left">
                      450 gr
                    </Text>
                    <Text
                      fontSize={"10px"}
                      color="#000000"
                      fontWeight="bold"
                      textAlign="left"
                    >
                      Rp 10.000
                    </Text>
                  </Box>
                </VStack>
              </Pressable>
            </HStack>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default Beranda;
