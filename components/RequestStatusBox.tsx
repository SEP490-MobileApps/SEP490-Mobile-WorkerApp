import { repairRequestStatuses } from "@/constants/RepairRequestStatus";
import { RepairRequestStatus } from "@/models/RepairRequestStatus";
import { Box } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
interface RequestStatusBoxProps {
  requestStatus: number;
}
export default function RequestStatusBox({
  requestStatus,
}: RequestStatusBoxProps) {
  const [statusBoxValue, setStatusBoxValue] = useState<RepairRequestStatus>(
    repairRequestStatuses[0]
  );
  useEffect(() => {
    const selectedStatus = getSelectedStatus();
    setStatusBoxValue(selectedStatus);
  }, []);

  const getSelectedStatus = () => {
    var result = repairRequestStatuses.filter((status) => {
      return status.key === requestStatus;
    });
    return result[0];
  };
  return (
    <Box>
      <Box
        style={styles.container}
        alignSelf="center"
        _text={{
          fontSize: "md",
          fontWeight: "extrabold",
          color: statusBoxValue.textColor,
          letterSpacing: "lg",
        }}
        bg={statusBoxValue?.color}
      >
        {statusBoxValue?.value}
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
