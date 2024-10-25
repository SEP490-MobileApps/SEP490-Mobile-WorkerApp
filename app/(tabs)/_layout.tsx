import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React, { ReactNode } from "react";

import { useClientOnlyValue } from "@/components/deprecated/useClientOnlyValue";
import Colors from "@/constants/Colors";
import { useHeaderBarContext } from "@/hooks/HeaderBarProvider";
import { Ionicons } from "@expo/vector-icons";
import { Icon, IconButton } from "native-base";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { isRequestFilterShown, showRequestFilter, hideRequestFilter } =
    useHeaderBarContext();

  const toggleRequestFiter = () => {
    if (isRequestFilterShown) hideRequestFilter();
    else showRequestFilter();
  };
  const openRequestFilterButton = (): ReactNode => {
    return (
      <IconButton
        size="lg"
        icon={<Icon as={Ionicons} name="filter-outline" />}
        _icon={{ color: Colors.ewmh.foreground }}
        color={Colors.ewmh.foreground}
        onPress={toggleRequestFiter}
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
          headerRight: () => openRequestFilterButton(),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Hồ sơ cá nhân",

          headerTitleStyle: {
            color: "white",
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.ewmh.background,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
