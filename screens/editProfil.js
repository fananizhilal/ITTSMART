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

class EditProfil extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <Header title="Akun" backButton={true} />
        <ScrollView px={"20px"} py={"70px"}>
          <Image
            source={require("../assets/LinkAja.png")}
            zIndex={1}
            mt={"-50px"}
            position="absolute"
            style={{
              width: 110,
              height: 110,
              borderRadius: 500,
              borderWidth: 2,
              borderColor: "#C689B0",
              alignSelf: "center",
              mt: "-200px",
            }}
            alt="Thumbnail foto profil"
          />
          <Box bg="#47B04A" w={"100%"} h={"350px"} borderRadius={"15px"}>
            <VStack space={"20px"} px={"20px"} mt={"70px"}>
              <Text fontSize={"18px"} textAlign="center" color="#ffffff">
                Farhan Muzakki
              </Text>
              <VStack space={"5px"}>
                <Text fontSize={"12px"} color="#ffffff">
                  Email
                </Text>
                <Box
                  w={"100%"}
                  h={"38px"}
                  borderWidth="2"
                  borderRadius={"30px"}
                  borderColor="#ffffff"
                  p={"8px"}
                >
                  <Text fontSize={"12px"} color="#ffffff">
                    FarhanMuzakki@gmail.com
                  </Text>
                </Box>
                <Text fontSize={"12px"} color="#ffffff">
                  No Telepon
                </Text>
                <Box
                  w={"100%"}
                  h={"38px"}
                  borderWidth="2"
                  borderRadius={"30px"}
                  borderColor="#ffffff"
                  p={"8px"}
                >
                  <Text fontSize={"12px"} color="#ffffff">
                    085123456789
                  </Text>
                </Box>
              </VStack>
              <HStack mt={"10px"} space={"2"}>
                <Pressable
                  w={"130px"}
                  h={"40px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  alignSelf="center"
                  onPress={() => navigation.navigate("")}
                >
                  <HStack space={"1"} py={"8px"} px={"17px"}>
                    <Ionicons name="md-trash" size={22} color="#47B04A" />
                    <Text
                      fontSize={"12px"}
                      color="#47B04A"
                      textAlign="center"
                      py={"3px"}
                    >
                      Hapus Akun
                    </Text>
                  </HStack>
                </Pressable>
                <Divider mx={1} orientation="vertical" />
                <Pressable
                  w={"90px"}
                  h={"40px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  alignSelf="center"
                  onPress={() => navigation.navigate("EditProfil2")}
                >
                  <HStack space={"1"} py={"8px"} px={"17px"}>
                    <Ionicons
                      name="ios-pencil-sharp"
                      size={20}
                      color="#47B04A"
                    />
                    <Text
                      fontSize={"12px"}
                      color="#47B04A"
                      textAlign="center"
                      py={"3px"}
                    >
                      Edit
                    </Text>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack></HStack>
            </VStack>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfil;
