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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";
import { Header } from "../components";

class Detail extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <Header title="Detail Produk" backButton={true} />
        <ScrollView
          mt={"10px"}
          bg="#FFFFFF"
          borderTopRadius={"30px"}
          p={"20px"}
          shadow="9"
        >
          <Image
            bg="#F1F1F1"
            w={"320px"}
            h={"335px"}
            borderRadius={"30px"}
            source={require("../assets/pisang.jpeg")}
          />
          <Box px={"10px"} py={"10px"}>
            <Text
              fontSize={"30px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              Pisang
            </Text>
            <Text fontSize={"15px"} color="#B3B3B3" textAlign="left">
              450 gr
            </Text>
            <Box h={"50%"}>
              <Text fontSize={"15px"} color="#000000" textAlign="left">
                Pisang fresh dan bagus, rasa manis, daging mengkal, memiliki
                banyak serat yang baik untuk pencernaan
              </Text>
            </Box>
            <Text
              py={"10px"}
              fontSize={"20px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              Rp 10.000
            </Text>
            <Box py={"5px"}>
              <Pressable
                w={"100%"}
                h={"40px"}
                borderRadius={"30px"}
                bg="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("Belanja")}
              >
                <Text
                  fontSize={"14px"}
                  color="#FFFFFF"
                  textAlign="center"
                  p={"8px"}
                >
                  Belanja Sekarang
                </Text>
              </Pressable>
            </Box>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
