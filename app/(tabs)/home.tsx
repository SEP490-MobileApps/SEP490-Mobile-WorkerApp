import FilterModal from "@/components/home/Filter";
import RequestCard from "@/components/home/RequestCard";
import {
  IN_PROGRESS,
  NEW_REQUEST,
} from "@/components/home/RequestStatusIndicator";
import Colors from "@/constants/Colors";
import { REPAIR_REQUESTS } from "@/dummies/DummyRequests";
import { useHeaderBarContext } from "@/hooks/HeaderBarProvider";
import { useFocusEffect } from "expo-router";
import { ScrollView, Text, VStack } from "native-base";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  const { isRequestFilterShown, hideRequestFilter } = useHeaderBarContext();
  useFocusEffect(
    useCallback(() => {
      console.log("Hello World!");
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.newRequestContainer}>
        <Text style={styles.title}>Yêu cầu mới</Text>
        <NewRequests />
      </View>
      <View style={styles.inProgressRequestContainer}>
        <Text style={styles.title}>Đang thực hiện</Text>
        <InProgressRequests />
      </View>
      <FilterModal isOpen={isRequestFilterShown} onClose={hideRequestFilter} />
    </View>
  );
}

function NewRequests() {
  return (
    <ScrollView w="100%">
      <VStack w="100%">
        {REPAIR_REQUESTS.map((request, key) => {
          if (request.status === NEW_REQUEST)
            return <RequestCard request={request} key={key} />;
        })}
      </VStack>
    </ScrollView>
  );
}
function InProgressRequests() {
  return (
    <ScrollView w="100%">
      <VStack w="100%">
        {REPAIR_REQUESTS.map((request, key) => {
          if (request.status === IN_PROGRESS)
            return <RequestCard request={request} key={key} />;
        })}
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",

    color: Colors.ewmh.background,
  },
  filter: {
    flex: 1,
    width: "100%",
  },
  newRequestContainer: {
    flex: 6,
  },
  inProgressRequestContainer: {
    marginTop: 12,
    flex: 6,
  },
});
