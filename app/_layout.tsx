import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Icon, IconButton, NativeBaseProvider } from "native-base";
import { ReactNode, useEffect } from "react";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const toPreviousPage = () => {
    router.back();
  };
  const backButton = (): ReactNode => {
    return (
      <IconButton
        size="lg"
        icon={<Icon as={Ionicons} name="arrow-back-outline" />}
        color={Colors.ewmh.foreground}
        onPress={toPreviousPage}
      />
    );
  };
  return (
    <>
      <NativeBaseProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="requestDetails"
            options={{
              title: "Chi tiết yêu cầu",
              headerTitleStyle: {
                color: "white",
              },
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors.ewmh.background,
              },
              headerLeft: () => backButton(),
            }}
          />
          <Stack.Screen
            name="products"
            options={{
              title: "Vật tư điện nước",
              headerTitleStyle: {
                color: "white",
              },
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors.ewmh.background,
              },
              headerLeft: () => backButton(),
            }}
          />
        </Stack>
      </NativeBaseProvider>
    </>
  );
}
