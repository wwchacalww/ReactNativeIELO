import EloLogo from "@assets/EloLogo";
import { Container, MenuButton, MenuIcon, Title } from "./styles";

type props = {
  title: string;
}
export function Header({title}: props) {
  return (
    <Container>
      <MenuButton>
        <MenuIcon />
      </MenuButton>

      <Title>{title}</Title>
      <EloLogo />
    </Container>
  )
}