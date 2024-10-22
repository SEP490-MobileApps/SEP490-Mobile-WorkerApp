import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Button, Icon, Modal, VStack } from "native-base";
import React, { useImperativeHandle, useState } from "react";
import { StyleSheet } from "react-native";
import LabeledDatePicker from "./LabeledDatePicker";
interface FilterButtonProps {
  onPress: () => void;
}
export function FilterButton({ onPress }: FilterButtonProps) {
  return (
    <Button
      style={styles.container}
      size="lg"
      leftIcon={<Icon as={Ionicons} name="filter-outline" />}
      onPress={onPress}
    >
      Lọc theo
    </Button>
  );
}

export interface FilterModalProps {
  showModal: () => void;
}
export const FilterModal = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  useImperativeHandle(ref, () => ({
    showModal: () => {
      setIsOpen(true);
    },
  }));
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Lọc theo ngày</Modal.Header>
          <Modal.Body>
            <VStack style={styles.datePicker}>
              <LabeledDatePicker label="Ngày bắt đầu" />
              <LabeledDatePicker label="Ngày kết thúc" />
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setIsOpen(false);
              }}
            >
              Chấp nhận
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.ewmh.background,
    justifyContent: "center",
    marginBottom: 10,
  },
  datePicker: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
