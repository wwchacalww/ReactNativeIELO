import { Header } from "@components/Header";
import { Container, Content } from "./styles";
import { CardResume } from "@components/CardResume";



export function ControlPanel() {
  return (
    <Container>
      <Header title="Painel de Controle" />
      <Content>
        <CardResume qnt={13} title="25 OUT 2024" />
      </Content>
    </Container>
  );
}

