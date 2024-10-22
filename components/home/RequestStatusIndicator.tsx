import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Colors from "@/constants/Colors";
import { Box } from "native-base";

type RepairRequestStatus = {
  key: number;
  value: string;
  color: string;
  textColor: string;
};
export const IN_PROGRESS = 1;
export const COMPLETED = 2;

const repairRequestStatuses: RepairRequestStatus[] = [
  {
    key: IN_PROGRESS,
    value: "Đang thực hiện",
    color: Colors.ewmh.requestStatus.inProgress,
    textColor: Colors.ewmh.requestStatus.inProgressText,
  },
  {
    key: COMPLETED,
    value: "Đã hoàn thành",
    color: Colors.ewmh.requestStatus.completed,
    textColor: Colors.ewmh.requestStatus.completedText,
  },
];
interface RequestStatusIndicatorProps {
  status: number;
}

export default function RequestStatusIndicator({
  status,
}: RequestStatusIndicatorProps) {
  const [statusBoxValue, setStatusBoxValue] = useState<RepairRequestStatus>();
  useEffect(() => {
    const selectedStatus = getSelectedStatus();
    setStatusBoxValue(selectedStatus);
  }, []);

  const getSelectedStatus = () => {
    var result = repairRequestStatuses.filter((reqStatus) => {
      return reqStatus.key === status;
    });
    return result[0];
  };
  return (
    <View>
      {statusBoxValue === undefined ? null : (
        <Box>
          <Box
            style={styles.container}
            alignSelf="center"
            _text={{
              fontSize: "md",
              fontWeight: "extrabold",
              color: statusBoxValue?.textColor,
              letterSpacing: "lg",
            }}
            bg={statusBoxValue?.color}
          >
            {statusBoxValue?.value}
          </Box>
        </Box>
      )}
    </View>
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
