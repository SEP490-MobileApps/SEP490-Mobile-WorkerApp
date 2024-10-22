import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Tabs } from "expo-router";
import React, { ReactNode } from "react";

import { useClientOnlyValue } from "@/components/deprecated/useClientOnlyValue";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const getScreenOptions = (icon: ReactNode, title: string) => {
    //   return {
    //     title: "Yêu cầu sửa chữa",
    //     headerTitleStyle: {
    //       color: "white",
    //     },
    //     headerTitleAlign: "center",
    //     headerStyle: {
    //       backgroundColor: Colors.ewmh.background,
    //     },
    //     tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
    //   };
  };
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
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.ewmh.background,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Yêu cầu sửa chữa",

          headerTitleStyle: {
            color: "white",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.ewmh.background,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarShowLabel: false,
        }}
      />
     
    </Tabs>
  );
}
