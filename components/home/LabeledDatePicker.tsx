import Colors from "@/constants/Colors";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Text } from "native-base";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, TextInput, View } from "react-native";

interface DatePickerProps {
  label: string;
}
export default function LabeledDatePicker({ label }: DatePickerProps) {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState("");
  const toggleDatePicker = () => {
    setIsDatePickerShown(!isDatePickerShown);
  };
  const onChange = (
    { type }: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (type == "set") {
      setDate(selectedDate as Date);
      setDateString((selectedDate as Date).toDateString());
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <View style={styles.container}>
      <Text fontWeight="bold" style={styles.label}>
        {label}
      </Text>

      <Pressable onPress={toggleDatePicker}>
        <TextInput
          style={styles.dateTextInput}
          value={dateString}
          placeholder="Vui lòng chọn"
          placeholderTextColor={Colors.ewmh.foreground2}
          editable={false}
        />
      </Pressable>

      {isDatePickerShown ? (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={date}
          onChange={onChange}
          minimumDate={new Date(2020, 12, 31)}
          maximumDate={new Date(2030, 12, 31)}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
  },
  label: {
    marginBottom: 2,
  },
  dateTextInput: {
    borderWidth: 1,
    backgroundColor: Colors.ewmh.background2,
    padding: 5,
    borderRadius: 5,
    width: "100%",
  },
});
