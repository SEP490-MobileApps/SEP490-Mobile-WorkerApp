import { FilterButton, FilterModal } from "@/components/Filter";
import RequestCard from "@/components/RequestCard";
import { COMPLETED, IN_PROGRESS } from "@/constants/RepairRequestStatus";
import { repairRequests } from "@/dummies/DummyRequests";
import { useFocusEffect } from "expo-router";
import { ScrollView, Text, VStack } from "native-base";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  useFocusEffect(
    useCallback(() => {
      console.log("Hello World!");
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <FilterButton onPress={() => setShowModal(true)} />
        <FilterModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </View>
      <View style={styles.newRequestContainer}>
        <Text style={styles.title}>Yêu cầu mới</Text>
        <NewRequest />
      </View>
      <View style={styles.completedRequestContainer}>
        <Text style={styles.title}>Đã hoàn thành</Text>
        <CompletedRequest />
      </View>
    </View>
  );
}

function NewRequest() {
  return (
    <ScrollView w="100%">
      <VStack w="100%">
        {repairRequests.map((request, key) => {
          if (request.status === IN_PROGRESS)
            return <RequestCard request={request} key={key} />;
        })}
      </VStack>
    </ScrollView>
  );
}
function CompletedRequest() {
  return (
    <ScrollView w="100%">
      <VStack w="100%">
        {repairRequests.map((request, key) => {
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
  },
  filter: {
    flex: 1,
    width: "100%",
  },
  newRequestContainer: {
    flex: 6,
  },
  completedRequestContainer: {
    marginTop: 30,
    flex: 4,
  },
});