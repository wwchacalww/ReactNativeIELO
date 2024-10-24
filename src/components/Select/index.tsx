import { Container, Icon, SelectInput, } from "./styles";
import { MaterialIcons} from '@expo/vector-icons';
import { Picker, PickerProps } from "@react-native-picker/picker";

type ItemProps = {
  label: string;
  value: string;
}
type Props = PickerProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  value: string;
  setValue: () => void;
  items: ItemProps[];
}

export function Select({icon,value, setValue,items,...rest}: Props) {
  return (
    <Container>
      <Icon name={icon} size={32} />

      <SelectInput
        selectedValue={value}
        onValueChange={setValue}
        {...rest}
      >
        {items.map( (item) => (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </SelectInput>
    </Container>
  )
}