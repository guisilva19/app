import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "native-base";
import { colors } from "../../theme/colors";

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,

          headerShown: false,
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: colors.greenDark,
            paddingTop: 5,
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
                return (
                  <AntDesign name="calendar" size={size} color="#ffffff" />
                );
              }
              return (
                <AntDesign name="calendar" size={size} color="#dadada7f" />
              );
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
                return <AntDesign name="upload" size={size} color="#ffffff" />;
              }
              return <AntDesign name="upload" size={size} color="#dadada7f" />;
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
                  <AntDesign name="creditcard" size={size} color="#ffffff" />
                );
              }
              return (
                <AntDesign name="creditcard" size={size} color="#dadada7f" />
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
        <Tabs.Screen
          name="documents"
          options={{
            title: "Documents",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => {
              if (focused) {
                return <AntDesign name="setting" size={size} color="#ffffff" />;
              }
              return <AntDesign name="setting" size={size} color="#dadada7f" />;
            },
          }}
        />
      </Tabs>
    </>
  );
}
