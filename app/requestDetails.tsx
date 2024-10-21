import CustomerInformation from "@/components/CustomerInformation";
import CustomerPayingIndicator from "@/components/CustomerPayingIndicator";
import WorkerHorizontalList from "@/components/WorkerHorizontalList";
import { REPAIR_REQUESTS } from "@/dummies/DummyRequests";
import { RepairRequest } from "@/models/RepairRequest";
import { Divider, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface RequestDetailsProps {
  requestId: string;
}
export default function RequestDetails({ requestId }: RequestDetailsProps) {
  const [request, setRequest] = useState(REPAIR_REQUESTS[0]);
  return (
    <ScrollView>
      <VStack style={styles.container}>
        <RequestDetail request={request} />
        <CustomerDetail />
        <WorkersSection />
      </VStack>
    </ScrollView>
  );
}

interface RequestDetailProps {
  request: RepairRequest;
}
function RequestDetail({ request }: RequestDetailProps) {
  return (
    <VStack w="100%">
      <Text fontWeight="bold" fontSize="lg">
        {request.name}
      </Text>
      <Divider style={styles.divider} />
      <View style={styles.informationView}>
        <Text fontSize="md">Mã yêu cầu </Text>
        <Text fontWeight="bold" fontSize="md">
          {request.id}
        </Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.informationView}>
        <Text fontSize="md">Loại sửa chữa </Text>
        <CustomerPayingIndicator isCustomerPaying={true} />
      </View>
    </VStack>
  );
}
function CustomerDetail() {
  return (
    <View style={styles.detailBlock}>
      <Text style={styles.title}>Thông tin khách hàng</Text>
      <CustomerInformation />
    </View>
  );
}
function WorkersSection() {
  return (
    <View style={styles.detailBlock}>
      <Text style={styles.title}>Danh sách nhân viên</Text>
      <WorkerHorizontalList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 15,
  },
  divider: {
    marginVertical: 10,
  },
  requestDetail: {
    height: "50%",
    marginTop: 2,
    flexDirection: "column",
  },

  informationView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
  detailBlock: {
    width: "100%",
    marginTop: 8,
    flexDirection: "column",
  },
});
