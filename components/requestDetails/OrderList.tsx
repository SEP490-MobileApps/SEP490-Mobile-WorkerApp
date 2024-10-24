import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { PRODUCTS } from "@/dummies/DummyProducts";
import { FormatPriceToVnd } from "@/utils/PriceUtils";
import { Badge, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import OrderCard from "./OrderCard";

export default function OrderList() {
  return (
    <View style={styles.container}>
      <Text fontSize="lg" fontWeight="bold">
        Ngày mua: 20/10/2024
      </Text>
      <BriefDetails />
      <Orders />
    </View>
  );
}
function BriefDetails() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductCount = () => {
    return PRODUCTS.length;
  };

  return (
    <View style={styles.briefDetails}>
      <Badge colorScheme="info" variant="outline">
        <Text fontSize="lg">{getProductCount()} sản phẩm</Text>
      </Badge>
      <Text fontSize="lg" fontWeight="bold" color={Colors.ewmh.background}>
        {FormatPriceToVnd(totalPrice)}
      </Text>
    </View>
  );
}

function Orders() {
  return (
    <View style={styles.orders}>
      <ScrollView h="80%" nestedScrollEnabled={true}>
        {PRODUCTS.map((product, key) => {
          return <OrderCard product={product} key={key} />;
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.55,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: 15,
    backgroundColor: Colors.ewmh.background2,
    overflow: "hidden",
  },
  briefDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  orders: {
    marginVertical: 10,
  },
});
