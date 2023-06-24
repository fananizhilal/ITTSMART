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

class EditProfil2 extends Component {
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
                <Input
                  w={"100%"}
                  h={"38px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  p={"8px"}
                  placeholder="FarhanMuzakki@gmail.com"
                />
                <Text fontSize={"12px"} color="#ffffff">
                  No Telepon
                </Text>
                <Input
                  w={"100%"}
                  h={"38px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  p={"8px"}
                  placeholder="085123456789"
                />
              </VStack>
              <Pressable
                w={"90px"}
                h={"40px"}
                borderRadius={"30px"}
                bg="#ffffff"
                alignSelf="center"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"12px"}
                  color="#47B04A"
                  textAlign="center"
                  fontWeight="bold"
                  py={"10px"}
                >
                  Simpan
                </Text>
              </Pressable>
            </VStack>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default EditProfil2;
