import FilterModal, { FilterModalProps } from "@/components/home/Filter";
import RequestCard from "@/components/home/RequestCard";
import {
  COMPLETED,
  IN_PROGRESS,
} from "@/components/home/RequestStatusIndicator";
import { REPAIR_REQUESTS } from "@/dummies/DummyRequests";
import { useHeaderBarContext } from "@/hooks/HeaderBarProvider";
import { useFocusEffect } from "expo-router";
import { ScrollView, Text, VStack } from "native-base";
import { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  const { isRequestFilterShown, hideRequestFilter } = useHeaderBarContext();
  const filterRef = useRef<FilterModalProps>(null);
  // const showModal = () => {
  //   filterRef.current?.showModal();
  // };
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
      <View style={styles.completedRequestContainer}>
        <Text style={styles.title}>Đã hoàn thành</Text>
        <CompletedRequests />
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
          if (request.status === IN_PROGRESS)
            return <RequestCard request={request} key={key} />;
        })}
      </VStack>
    </ScrollView>
  );
}
function CompletedRequests() {
  return (
    <ScrollView w="100%">
      <VStack w="100%">
        {REPAIR_REQUESTS.map((request, key) => {
          if (request.status === COMPLETED)
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
    alignSelf: "center",
  },
  filter: {
    flex: 1,
    width: "100%",
  },
  newRequestContainer: {
    flex: 7,
  },
  completedRequestContainer: {
    marginTop: 12,
    flex: 4,
  },
});
