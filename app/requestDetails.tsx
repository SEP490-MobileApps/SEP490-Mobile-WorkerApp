import CustomerInformation from "@/components/requestDetails/CustomerInformation";
import CustomerPayingIndicator from "@/components/requestDetails/CustomerPayingIndicator";
import OrderList from "@/components/requestDetails/OrderList";
import OrdersButtonGroup from "@/components/requestDetails/OrdersButtonGroup";
import RequestStatusActionSheet from "@/components/requestDetails/RequestStatusActionSheet";
import WorkerHorizontalList from "@/components/requestDetails/WorkerHorizontalList";
import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { PRODUCTS } from "@/dummies/DummyProducts";
import { REPAIR_REQUESTS } from "@/dummies/DummyRequests";
import { useHeaderBarContext } from "@/hooks/HeaderBarProvider";
import { RepairRequest } from "@/models/RepairRequest";
import { Ionicons } from "@expo/vector-icons";
import { Button, Divider, Icon, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export interface RequestDetailsProps {
  requestId: string;
  openActionSheet: () => void;
}
export default function RequestDetails({ requestId }: RequestDetailsProps) {
  const { isRequestStatusShown, hideRequestStatus } = useHeaderBarContext();
  const [request, setRequest] = useState(REPAIR_REQUESTS[0]);

  return (
    <ScrollView>
      <VStack style={styles.container}>
        <RequestDetail request={request} />
        <CustomerDetail />
        <WorkersSection />
        <OrdersSection />
        <CheckoutSection />
        <RequestStatusActionSheet
          isOpen={isRequestStatusShown}
          closeActionSheet={hideRequestStatus}
        />
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
function OrdersSection() {
  return (
    <View style={styles.detailBlock}>
      <Text style={styles.title}>Đơn hàng đính kèm</Text>
      {PRODUCTS ? <OrderList /> : <OrdersButtonGroup />}
      {/* <OrdersButtonGroup /> */}
    </View>
  );
}
function CheckoutSection() {
  const goToCheckoutScreen = () => {};
  return (
    <Button
      style={styles.checkoutButton}
      leftIcon={<Icon as={Ionicons} name="card-outline" />}
      size="sm"
      onPress={goToCheckoutScreen}
    >
      <Text fontWeight="bold" style={styles.orderButtonText} fontSize="sm">
        Thanh toán
      </Text>
    </Button>
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
  checkoutButton: {
    flexDirection: "row",
    backgroundColor: Colors.ewmh.background,
    height: SCREEN_HEIGHT * 0.05,
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
  },
  orderButtonText: {
    color: Colors.ewmh.foreground,
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
