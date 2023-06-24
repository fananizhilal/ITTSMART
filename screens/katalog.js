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

class Katalog extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <Header title="Katalog Produk" backButton={true} />
        <ScrollView p={"10px"}>
          <Box py={"10px"} w={"100%"}>
            <Input
              bg="#F1F1F1"
              w={"100%"}
              h={"45px"}
              borderRadius={"30px"}
              size="lg"
              placeholder="Cari Produk"
            />
          </Box>
          <Box w={"330px"} h={"30px"}>
            <HStack py={"2px"} space={"10px"}>
              <Pressable
                bg="#47B04A"
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#FFFFFF"
                  textAlign="center"
                  p={"3px"}
                >
                  Semua
                </Text>
              </Pressable>
              <Pressable
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                borderWidth={"1"}
                borderColor="#47B04A"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#47B04A"
                  textAlign="center"
                  p={"3px"}
                >
                  Buah
                </Text>
              </Pressable>
            </HStack>
          </Box>
          <Box w={"100%"}>
            <HStack px={"10px"} py={"15px"} space={"10px"}>
              <Pressable
                bg="#FFFFFF"
                w={"140px"}
                h={"229px"}
                shadow="4"
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

export default Katalog;
