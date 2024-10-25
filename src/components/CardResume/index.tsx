import { Container, Text, Title } from "./styles";

type Props = {
  qnt: number;
  title: string;
}

export function CardResume({qnt, title}: Props) {
  return (
    <Container>
      <Text>{qnt.toString()+" atendimentos"}</Text>
      <Title>{title}</Title>
    </Container>
  )
}