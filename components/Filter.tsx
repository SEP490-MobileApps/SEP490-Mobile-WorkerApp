import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Button, FormControl, Icon, Input, Modal } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
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

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [date, setDate] = useState(new Date());
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.ewmh.background,
    justifyContent: "center",
    marginBottom: 10,
  },
  actionSheet: {
    backgroundColor: "transparent",
  },
});
