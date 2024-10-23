import { Actionsheet } from "native-base";

interface RequestStatusActionSheetProps {
  isOpen: boolean;
  closeActionSheet: () => void;
}
export default function RequestStatusActionSheet({
  isOpen,
  closeActionSheet,
}: RequestStatusActionSheetProps) {
  return (
    <Actionsheet isOpen={isOpen} onClose={closeActionSheet}>
      <Actionsheet.Content>
        <Actionsheet.Item onPress={closeActionSheet}>Option 1</Actionsheet.Item>
        <Actionsheet.Item onPress={closeActionSheet}>Option 2</Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
