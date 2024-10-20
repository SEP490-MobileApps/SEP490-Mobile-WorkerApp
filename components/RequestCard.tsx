import Colors from "@/constants/Colors";
import { RepairRequest } from "@/models/RepairRequest";
import { Text, VStack } from "native-base";
import { StyleSheet, View } from "react-native";
import RequestStatusBox from "./RequestStatusBox";

interface RequestCardProps {
  request: RepairRequest;
}
export default function RequestCard({ request }: RequestCardProps) {
  return (
    <View style={styles.container}>
      <VStack w="100%">
        <View style={styles.informationView}>
          <Text fontWeight="bold" fontSize="md">
            {request.name}
          </Text>
          <Text fontWeight="bold" fontSize="md" style={styles.id}>
            {request.id}
          </Text>
        </View>
        <View style={styles.status}>
          <RequestStatusBox requestStatus={request.status} />
        </View>
        <View style={styles.informationView}>
          <Text fontSize="md">Căn hộ: </Text>
          <Text fontWeight="bold" fontSize="md">
            {request.apartmentRoom}
          </Text>
        </View>
        <View style={styles.informationView}>
          <Text fontSize="md">Ngày yêu cầu: </Text>
          <Text fontWeight="bold" fontSize="md">
            {request.requestedDate}
          </Text>
        </View>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    overflow: "hidden",
  },
  status: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  informationView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  id: {
    color: Colors.ewmh.background,
  },
});
