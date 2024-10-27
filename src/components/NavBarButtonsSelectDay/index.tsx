import { TouchableOpacity } from "react-native";
import { Container } from "./styles";
import { ButtonSelectDay } from "@components/ButtonSelectDay";
import { MaterialIcons} from '@expo/vector-icons';


type Props = {
  selected: boolean;
  day: string;
  dayWeek: string;
}[]
export function NavBarButtonsSelectDay({props}:{props: Props}) {
  return (
    <Container>
      <TouchableOpacity>
        <MaterialIcons name="arrow-left" color="#FFF" size={36} />
      </TouchableOpacity>
      {props.map( d => ( <ButtonSelectDay key={d.day} day={d.day} dayWeek={d.dayWeek}  selected={d.selected}/>))}
      <TouchableOpacity>
        <MaterialIcons name="arrow-right" color="#FFF" size={36} />
      </TouchableOpacity>
    </Container>
  )
}