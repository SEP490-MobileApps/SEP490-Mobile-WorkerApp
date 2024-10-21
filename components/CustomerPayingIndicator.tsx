import Colors from "@/constants/Colors";
import { Box } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

interface CustomerPayingIndicatorProps {
  isCustomerPaying: boolean;
}

export default function CustomerPayingIndicator({
  isCustomerPaying,
}: CustomerPayingIndicatorProps) {
  const [indicatorValue, setIndicatorValue] = useState<CustomerPayingValue>(
    customerPayingValues[0]
  );
  useEffect(() => {
    if (isCustomerPaying) setIndicatorValue(customerPayingValues[0]);
    else setIndicatorValue(customerPayingValues[1]);
  }, []);

  return (
    <Box>
      <Box
        style={styles.container}
        alignSelf="center"
        _text={{
          fontSize: "md",
          fontWeight: "extrabold",
          color: indicatorValue.textColor,
          letterSpacing: "lg",
        }}
        bg={indicatorValue?.color}
      >
        {indicatorValue?.value}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
  },
});

export type CustomerPayingValue = {
  key: number;
  value: string;
  color: string;
  textColor: string;
};
const customerPayingValues: CustomerPayingValue[] = [
  {
    key: 0,
    value: "Tính phí",
    color: Colors.ewmh.requestStatus.inProgress,
    textColor: Colors.ewmh.requestStatus.inProgressText,
  },
  {
    key: 1,
    value: "Miễn phí",
    color: Colors.ewmh.requestStatus.completed,
    textColor: Colors.ewmh.requestStatus.completedText,
  },
];
