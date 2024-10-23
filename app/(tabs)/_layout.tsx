import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Tabs } from "expo-router";
import React from "react";

import { useClientOnlyValue } from "@/components/deprecated/useClientOnlyValue";
import Colors from "@/constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const toPreviousPage = () => {
    router.back();
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
