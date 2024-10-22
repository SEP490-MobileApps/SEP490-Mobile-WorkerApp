import ProductList from "@/components/products/ProductList";
import SearchBar from "@/components/products/SearchBar";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Products />
    </View>
  );
}
function Products() {
  return (
    <View style={styles.products}>
      <ProductList />
    </View>
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
  products: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    
  },
});
