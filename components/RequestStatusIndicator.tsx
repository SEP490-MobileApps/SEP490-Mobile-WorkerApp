import { Text } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import { COMPLETED, IN_PROGRESS } from "./RequestCard";

type RepairRequestStatus = {
  key: number;
  value: string;
  color: string;
  textColor: string;
};
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
  const [statusBoxValue, setStatusBoxValue] = useState<RepairRequestStatus>(
    repairRequestStatuses[0]
  );
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
    <>
      {/* {statusBoxValue ? (
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
            <Text>{statusBoxValue?.value}</Text>
            
          </Box>
        </Box>
      ) : null}
      ; */}
      <Text>Lmao</Text>
    </>
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
