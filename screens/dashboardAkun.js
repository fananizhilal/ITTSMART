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
  Divider,
  Avatar,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";
import { Header } from "../components";

class DashboardAkun extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View flex={1} bg="#FFFFFF">
        <Header title="Profil" backButton={true} />
        <ScrollView>
          <Box bg="#47B04A" w={"360px"} h={"82px"} p={"15px"}>
            <HStack space={"10px"}>
              <Image
                source={require("../assets/LinkAja.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 500,
                  borderWidth: 2,
                  borderColor: "#C689B0",
                  marginLeft: 12,
                }}
                alt="Thumbnail foto profil"
              />
              <VStack space={"2px"}>
                <Text fontSize={"16px"} color="#ffffff">
                  Farhan Muzakki
                </Text>
                <Text fontSize={"11px"} color="#ffffff">
                  0812-3456-7890
                </Text>
              </VStack>
              <Pressable
                py={"15px"}
                ml={"70px"}
                onPress={() => navigation.navigate("EditProfil")}
              >
                <Ionicons
                  name="chevron-forward-circle-outline"
                  size={20}
                  color="#ffffff"
                />
              </Pressable>
            </HStack>
          </Box>
          <Box
            px={"30px"}
            py={"10px"}
            mt={"10px"}
            ml={"18px"}
            shadow="3"
            w={"300px"}
            h={"75px"}
            borderRadius={"20px"}
          >
            <HStack space={"5px"} py={"15px"}>
              <HStack space={"5px"}>
                <Ionicons name="cash-outline" size={24} color="#47B04A" />
                <Text fontSize={"10px"} color="#000000" py={"8px"}>
                  Voucher{" "}
                </Text>
              </HStack>
              <Divider mx={1} orientation="vertical" />
              <HStack space={"5px"}>
                <Ionicons name="logo-bitcoin" size={24} color="#47B04A" />
                <Text fontSize={"10px"} color="#000000" py={"8px"}>
                  ITTSpoin{" "}
                </Text>
              </HStack>
              <Divider mx={1} orientation="vertical" />
              <HStack space={"5px"}>
                <Ionicons name="ios-gift-outline" size={24} color="#47B04A" />
                <Text fontSize={"10px"} color="#000000" py={"8px"}>
                  Referral{" "}
                </Text>
              </HStack>
            </HStack>
          </Box>
          <Box p={"25px"}>
            <Text fontSize={"10px"} color="#535353">
              Dompet DIgital
            </Text>
            <HStack mt={"10px"} space={"8px"}>
              <Box w={"50px"} h={"48px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"8px"}
                  w={"23px"}
                  h={"23px"}
                  alignSelf="center"
                  source={require("../assets/gopay.png")}
                />
                <Text fontSize={"6px"} color="#000000" alignSelf="center">
                  Gopay
                </Text>
              </Box>
              <Box w={"50px"} h={"48px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"8px"}
                  w={"23px"}
                  h={"23px"}
                  alignSelf="center"
                  borderRadius={"100px"}
                  source={require("../assets/LinkAja.png")}
                />
                <Text fontSize={"6px"} color="#000000" alignSelf="center">
                  Link Aja
                </Text>
              </Box>
              <Box w={"50px"} h={"48px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"8px"}
                  w={"23px"}
                  h={"23px"}
                  alignSelf="center"
                  source={require("../assets/ovo.jpeg")}
                />
                <Text fontSize={"6px"} color="#000000" alignSelf="center">
                  Ovo
                </Text>
              </Box>
              <Box w={"50px"} h={"48px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"8px"}
                  w={"23px"}
                  h={"23px"}
                  alignSelf="center"
                  source={require("../assets/dana.png")}
                />
                <Text fontSize={"6px"} color="#000000" alignSelf="center">
                  Dana
                </Text>
              </Box>
              <Box w={"50px"} h={"48px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"8px"}
                  w={"23px"}
                  h={"23px"}
                  alignSelf="center"
                  borderRadius={"100px"}
                  source={require("../assets/shopeepay.png")}
                />
                <Text fontSize={"6px"} color="#000000" alignSelf="center">
                  Gopay
                </Text>
              </Box>
            </HStack>
          </Box>
          <VStack space={"10px"} p={"10px"}>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Pesan
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Rekening
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Alamat Tersimpan
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Tentang Kami
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Syarat & Ketentuan
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"300px"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"10px"} color="#535353" p={"8px"}>
                Kebijakan Privasi
              </Text>
              <Divider mt={"5px"} w={"300px"} bg="#D9D9D9" />
            </Pressable>
          </VStack>
          <Pressable
            px={"15px"}
            py={"5px"}
            onPress={() => navigation.navigate("")}
          >
            <Box
              mt={"10px"}
              w={"300px"}
              h={"40px"}
              borderRadius={"30px"}
              borderColor="#47B04A"
              borderWidth={"1"}
              py={"7px"}
            >
              <Text
                fontSize={"14px"}
                color="#47B04A"
                textAlign="center"
                fontWeight="bold"
              >
                Keluar
              </Text>
            </Box>
          </Pressable>
        </ScrollView>
      </View>
    );
  }
}

export default DashboardAkun;
