import { SCREEN_HEIGHT } from "@/constants/Device";
import { PRODUCTS } from "@/dummies/DummyProducts";
import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <FlatList
      style={styles.list}
      numColumns={2}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      data={PRODUCTS}
      renderItem={(flatListItem) => <ProductCard product={flatListItem.item} />}
      keyExtractor={(worker) => worker.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.8,
    flexGrow: 0,
  },
});
