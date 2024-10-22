import Colors from "@/constants/Colors";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Modal } from "native-base";
import React, { useImperativeHandle, useState } from "react";

export interface UnderWarrantyProductProps {
  showModal: () => void;
}
export const UnderWarrantyProducts = React.forwardRef((props, ref) => {
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
          <Modal.Header backgroundColor={Colors.ewmh.background}>
            Sản phẩm còn bảo hành
          </Modal.Header>
          <Modal.Body>
            {/* <VStack style={styles.datePicker}>
                          
            </VStack> */}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
});
