import { TouchableOpacityProps } from "react-native";
import { ButtonDay, Container, Title, Day } from "./styles";

type Props = TouchableOpacityProps & {
  selected: boolean;
  day: string;
  dayWeek: string;
}
export function ButtonSelectDay({day, dayWeek, selected, ...rest}: Props) {
  return(
    <Container>
      
      <ButtonDay selected={selected} {...rest}>
        <Title selected={selected}>
          {day}
        </Title>
      </ButtonDay>
      <Day>
        {dayWeek}
      </Day>
    </Container>
  );
}