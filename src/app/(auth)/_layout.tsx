import { Tabs } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Box, Text } from "native-base";

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#1d4ed8",
            paddingVertical: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerTitle: ({ children }) => {
              return <Text tintColor="black">{children}</Text>;
            },
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return <Feather name="home" size={size} color="#ffffff" />;
              }
              return <Feather name="home" size={size} color="#dadada7f" />;
            },
          }}
        />
        <Tabs.Screen
          name="deposits"
          options={{
            title: "Deposits",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return (
                  <AntDesign name="barschart" size={size} color="#ffffff" />
                );
              }
              return (
                <AntDesign name="barschart" size={size} color="#dadada7f" />
              );
            },
          }}
        />
        <Tabs.Screen
          name="distributions"
          options={{
            title: "Distributions",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return (
                  <AntDesign name="linechart" size={size} color="#ffffff" />
                );
              }
              return (
                <AntDesign name="linechart" size={size} color="#dadada7f" />
              );
            },
          }}
        />
        <Tabs.Screen
          name="documents"
          options={{
            title: "Documents",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="documents-outline"
                    size={size}
                    color="#ffffff"
                  />
                );
              }
              return (
                <Ionicons
                  name="documents-outline"
                  size={size}
                  color="#dadada7f"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return <AntDesign name="user" size={size} color="#ffffff" />;
              }
              return <AntDesign name="user" size={size} color="#dadada7f" />;
            },
          }}
        />
      </Tabs>
    </>
  );
}
