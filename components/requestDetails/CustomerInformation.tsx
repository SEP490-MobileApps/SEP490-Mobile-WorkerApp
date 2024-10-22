import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { LOREM_IPSUM } from "@/dummies/lorem";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, HStack, Icon, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function CustomerInformation() {
  return (
    <View style={styles.container}>
      <AvatarSection />
      <AdditionalDetails />
      <Description />
    </View>
  );
}
function AvatarSection() {
  const url =
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <HStack style={styles.avatarStack} space={3}>
      <Avatar source={{ uri: url }} size="lg" />
      <Text fontSize="lg" fontWeight="bold">
        Đào Việt Anh
      </Text>
    </HStack>
  );
}
function AdditionalDetails() {
  return (
    <VStack style={styles.additionalDetailsStack} space={3} w="100%">
      <HStack space={3}>
        <Icon as={Ionicons} name="mail-outline" size="xl" />
        <Text fontSize="md">abc@gmail.com</Text>
      </HStack>
      <HStack space={3}>
        <Icon as={Ionicons} name="call-outline" size="xl" />
        <Text fontSize="md">0987654321</Text>
      </HStack>
    </VStack>
  );
}
function Description() {
  return (
    <View style={styles.description}>
      <VStack w="100%">
        <Text fontSize="md" fontWeight="bold">
          Chi tiết yêu cầu
        </Text>
        <ScrollView h="90%" nestedScrollEnabled={true}>
          <Text fontSize="md">{LOREM_IPSUM}</Text>
        </ScrollView>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
    width: "100%",
    height: SCREEN_HEIGHT * 0.55,
    alignItems: "center",
    backgroundColor: Colors.ewmh.background2,
    padding: 20,
  },
  avatarStack: {
    alignItems: "center",
  },
  additionalDetailsStack: {
    marginVertical: 10,
    padding: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  description: {
    backgroundColor: Colors.ewmh.background3,
    borderRadius: 10,
    padding: 15,
    width: "100%",
    height: SCREEN_HEIGHT * 0.3,
  },
});
