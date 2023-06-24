import * as React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  Beranda,
  Katalog,
  Keranjang,
  Pesanan,
  DashboardAkun,
  Detail,
  Belanja,
  Pembayaran,
  Ambil,
  Login,
  LostKoneksi,
  Login2,
  EditProfil,
  EditProfil2,
} from "./screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#47B04A",
        tabBarInactiveTintColor: "#959595",
        tabBarStyle: { height: "10%", backgroundColor: "#FFFFFF", shadow: "9" },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        headerShown: false,
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Katalog"
        component={Katalog}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="md-folder-open-outline" size={25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarLabel: "Keranjang",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="ios-basket-outline" size={25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarLabel: "Pesanan",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="reader-outline" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="DashboardAkun"
        component={DashboardAkun}
        options={{
          tabBarLabel: "Akun",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="person-circle-outline" size={25} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login2"
            component={Login2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LostKoneksi"
            component={LostKoneksi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Berandas"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Belanja"
            component={Belanja}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pembayaran"
            component={Pembayaran}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ambil"
            component={Ambil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfil"
            component={EditProfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfil2"
            component={EditProfil2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
