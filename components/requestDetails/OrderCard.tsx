import Colors from "@/constants/Colors";
import { Product } from "@/models/Product";
import { Ionicons } from "@expo/vector-icons";
import {
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from "native-base";
import { StyleSheet } from "react-native";
import { FormatPriceToVnd } from "../../utils/PriceUtils";

export interface OrderCardProps {
  product: Product;
}
export default function OrderCard({ product }: OrderCardProps) {
  return (
    <Box>
      <HStack
        style={styles.container}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
      >
        <Box style={styles.productImage}>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            w="100%"
            h="100%"
            alt="image"
          />
        </Box>

        <VStack space={3} style={styles.productDetails}>
          <Text fontSize="md" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="md" fontWeight="bold" color={Colors.ewmh.background}>
            {FormatPriceToVnd(product.price)}
          </Text>
          <Badge colorScheme="info" variant="outline">
            Số lượng: 2 cái
          </Badge>
          <Text fontSize="md" fontWeight="bold">
            Lý do: Cần thay mới
          </Text>
        </VStack>
        <IconButton
          size="lg"
          icon={<Icon as={Ionicons} name="ellipsis-vertical-outline" />}
          color={Colors.ewmh.foreground}
        />
      </HStack>
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    flex: 1,
  },
  productDetails: {
    flexDirection: "column",
    padding: 10,
    flex: 2,
  },
  productImage: {
    width: 20,
    flex: 1,
  },
});
