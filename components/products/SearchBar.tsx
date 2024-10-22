import Colors from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { HStack, Icon, IconButton, Input } from "native-base";

export default function SearchBar() {
  const showFilterModal = () => {};
  return (
    <HStack w="100%" space={3} alignSelf="center">
      <Input
        placeholder="Tìm kiếm"
        width="85%"
        borderRadius="4"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
      />
      <IconButton
        size="lg"
        icon={<Icon as={Ionicons} name="filter" />}
        color={Colors.ewmh.foreground}
        colorScheme="lightBlue"
        onPress={showFilterModal}
      />
    </HStack>
  );
}
