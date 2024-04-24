import { Stack } from "expo-router";
import { ContextProvider } from "../context/context";
import { NativeBaseProvider } from "native-base";
import { colors } from "../theme/colors";

export default function Layout() {
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
                  backgroundColor: colors.primary,
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
                  backgroundColor: colors.primary,
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
