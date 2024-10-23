import Colors from "@/constants/Colors";
import { PRODUCTS } from "@/dummies/DummyProducts";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Modal, ScrollView, Text } from "native-base";
import React, { useImperativeHandle, useState } from "react";
import UnderWarrantyProductCard from "./UnderWarrantyProductCard";

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
          <Modal.CloseButton color={Colors.ewmh.foreground} />
          <Modal.Header backgroundColor={Colors.ewmh.background}>
            <Text color={Colors.ewmh.foreground} fontWeight="bold">
              Sản phẩm còn bảo hành
            </Text>
          </Modal.Header>
          <Modal.Body>
            {/* <VStack style={styles.datePicker}>
                          
            </VStack> */}
            <ScrollView h="95%">
              {PRODUCTS.map((product, key) => {
                return <UnderWarrantyProductCard product={product} key={key} />;
              })}
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
});
