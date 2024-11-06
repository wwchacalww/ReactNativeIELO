import EloLogo from "@assets/EloLogo";
import { Container, MenuButton, MenuIcon, Title } from "./styles";
import { useNavigation, DrawerActions } from "@react-navigation/native";

type props = {
  title: string;
}
export function Header({title}: props) {
  const navigation = useNavigation();

  function handleShowMenu() {
    navigation.dispatch(DrawerActions.openDrawer);
  }
  return (
    <Container>
      <MenuButton onPress={handleShowMenu}>
        <MenuIcon />
      </MenuButton>

      <Title>{title}</Title>
      <EloLogo />
    </Container>
  )
}