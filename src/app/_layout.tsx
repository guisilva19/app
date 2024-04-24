import { Stack } from "expo-router";
import { ContextProvider } from "../context/context";
import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    PathwayRegular: require("../../assets/fonts/PathwayExtreme_120pt-Regular.ttf"),
    PathwayBold: require("../../assets/fonts/PathwayExtreme_120pt-Bold.ttf"),
  });

  useEffect(() => {
    const loadingFonts = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };
    loadingFonts();
  }, []);

  return (
    <>
      <ContextProvider>
        <NativeBaseProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="signup"
              options={{
                title: "SignUp",
                headerBackTitle: "Back",
                headerStyle: {
                  // backgroundColor: colors.primary,
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="forgot"
              options={{
                title: "Forgot Password",
                headerBackTitle: "Back",
                headerStyle: {
                  // backgroundColor: colors.primary,
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </NativeBaseProvider>
      </ContextProvider>
    </>
  );
}
