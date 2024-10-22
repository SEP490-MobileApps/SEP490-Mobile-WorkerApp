import Colors from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@/constants/Device";
import { PRODUCTS } from "@/dummies/DummyProducts";
import { LOREM_IPSUM } from "@/dummies/lorem";
import { Product } from "@/models/Product";
import { FormatPriceToVnd } from "@/utils/PriceUtils";
import { router } from "expo-router";
import { Button, Image, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

interface ProductsDetailsScreenProps {
  id: string;
}
export default function ProductsDetailsScreen({
  id,
}: ProductsDetailsScreenProps) {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(PRODUCTS[0]);
  });
  return (
    <>
      {product ? (
        <View style={styles.container}>
          <ProductImage image={product.imageUrl} />

          <Details product={product} />
          <PurchaseButton />
        </View>
      ) : null}
    </>
  );
}
interface ProductImageProps {
  image: string;
}
function ProductImage({ image }: ProductImageProps) {
  return (
    <Image
      source={{
        uri: image,
      }}
      style={styles.image}
      size="xl"
      alt="Product Image"
    />
  );
}
interface DetailsProps {
  product: Product;
}
function Details({ product }: DetailsProps) {
  return (
    <View style={styles.details}>
      <Text fontWeight="bold" fontSize="lg">
        {product.name}
      </Text>

      <Text
        fontSize="lg"
        fontWeight="bold"
        noOfLines={1}
        color={Colors.ewmh.background}
      >
        {FormatPriceToVnd(product.price)}
      </Text>

      <Description product={product} />
      <Text fontSize="lg" fontWeight="bold" noOfLines={1}>
        Bảo hành: 2 năm
      </Text>
    </View>
  );
}

function Description({ product }: DetailsProps) {
  return (
    <View style={styles.descriptionContainer}>
      <Text fontSize="lg" fontWeight="bold">
        Mô tả sản phẩm
      </Text>
      <ScrollView>
        <Text fontSize="lg">{LOREM_IPSUM}</Text>
      </ScrollView>
    </View>
  );
}
function PurchaseButton() {
  const handlePurchase = () => {
    router.replace("/requestDetails");
  };
  return (
    <Button style={styles.addToCart} onPress={handlePurchase}>
      <Text fontWeight="bold" color={Colors.ewmh.foreground} fontSize="sm">
        Thêm vào giỏ hàng
      </Text>
    </Button>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  image: {
    flex: 3,
    width: "100%",
  },
  details: {
    flex: 5,
    marginVertical: 20,
  },
  descriptionContainer: {
    flex: 1,
    marginVertical: 20,
  },

  addToCart: {
    backgroundColor: Colors.ewmh.background,
    height: SCREEN_HEIGHT * 0.06,
    width: "100%",
  },
});
