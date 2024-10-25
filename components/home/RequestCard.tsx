import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { RepairRequest } from "@/models/RepairRequest";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button, Icon, Text, VStack } from "native-base";
import { StyleSheet, View } from "react-native";
import RequestStatusIndicator from "./RequestStatusIndicator";

interface RequestCardProps {
  request: RepairRequest;
}
export default function RequestCard({ request }: RequestCardProps) {
  const goToDetails = () => {
    router.push("/requestDetails");
  };
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
          <RequestStatusIndicator status={request.status} />
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
        <Button
          style={styles.showDetailsButton}
          leftIcon={<Icon as={Ionicons} name="add-circle-outline" />}
          size="sm"
          onPress={goToDetails}
        >
          <Text fontWeight="bold" style={styles.orderButtonText} fontSize="sm">
            Xem chi tiết
          </Text>
        </Button>
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
  showDetailsButton: {
    flexDirection: "row",
    backgroundColor: Colors.ewmh.background,
    height: SCREEN_HEIGHT * 0.05,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  orderButtonText: {
    color: Colors.ewmh.foreground,
  },
});
