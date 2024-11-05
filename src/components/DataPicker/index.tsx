import { TextProps } from "react-native";
import { MaterialIcons} from '@expo/vector-icons'
import { Container, Icon, Text } from "./styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

type Props = TextProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  text: string;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>
  mode?: "date" | "time";
}

export function DataPicker({icon, text, date, mode = 'date', setDate,...rest}: Props) {
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: "date" | "time") => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      display: "spinner",
    });
  };

  return (
    <Container onPress={() => showMode(mode)}>
      <Icon name={icon} size={32} />

      <Text {...rest}>
        {
          mode === 'date' ? 
            `${text} (${date.toLocaleDateString()})` :
            `${text} (${date.toLocaleString()})`
        }
      </Text>
    </Container>
  )
}