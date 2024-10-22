import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { Ionicons } from "@expo/vector-icons";
import { Button, Icon, Text, VStack } from "native-base";
import { useRef } from "react";
import { StyleSheet } from "react-native";
import {
  UnderWarrantyProductProps,
  UnderWarrantyProducts,
} from "./UnderWarrantyProducts";

export default function OrdersButtonGroup() {
  const warrantyProductRef = useRef<UnderWarrantyProductProps>(null);
  const showModal = () => {
    warrantyProductRef.current?.showModal();
  };
  return (
    <VStack space={3}>
      <Button
        style={styles.orderButtons}
        leftIcon={<Icon as={Ionicons} name="add-circle-outline" />}
        size="sm"
      >
        <Text fontWeight="bold" style={styles.orderButtonText} fontSize="sm">
          Thêm sản phẩm
        </Text>
      </Button>
      <Button style={styles.orderButtons} onPress={showModal}>
        <Text fontWeight="bold" style={styles.orderButtonText} fontSize="sm">
          Xem các sản phẩm còn bảo hành
        </Text>
      </Button>
      <UnderWarrantyProducts ref={warrantyProductRef} />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 15,
  },

  orderButtons: {
    flexDirection: "row",
    backgroundColor: Colors.ewmh.background,
    height: SCREEN_HEIGHT * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  orderButtonText: {
    color: Colors.ewmh.foreground,
  },
});
