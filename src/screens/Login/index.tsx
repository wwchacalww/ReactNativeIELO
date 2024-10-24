import SvgComponent from "@assets/LogoBlue";
import { Container, Title } from "./style";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Login() {
  return (
    <Container>
      <SvgComponent 
        scaleX={0.7}
        scaleY={0.7}
      />
      <Title>Faça o seu login</Title>
      <Input icon="mail-outline" placeholder="E-mail" keyboardType="email-address" />
      <Input icon="lock-outline" placeholder="Senha" textContentType="password" secureTextEntry />
      <Button title="Entrar" style={{marginTop: 8}} />
    </Container>
  )
}