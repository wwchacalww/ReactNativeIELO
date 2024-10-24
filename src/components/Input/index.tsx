import { TextInputProps } from "react-native";
import { Container, Icon, TextInput } from "./styles";
import { MaterialIcons} from '@expo/vector-icons'

type Props = TextInputProps & {
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Input({icon,...rest}: Props) {
  return (
    <Container>
      <Icon name={icon} size={32} />

      <TextInput 
        {...rest}
      />
    </Container>
  )
}