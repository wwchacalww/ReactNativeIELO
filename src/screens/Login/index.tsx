import SvgComponent from "@assets/LogoBlue";
import { Container, Title } from "./style";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("controlPainel");
  }
  return (
    <Container>
      <SvgComponent 
        scaleX={0.7}
        scaleY={0.7}
      />
      <Title>Faça o seu login</Title>
      <Input icon="mail-outline" placeholder="E-mail" keyboardType="email-address" />
      <Input icon="lock-outline" placeholder="Senha" textContentType="password" secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} style={{marginTop: 8}} />
    </Container>
  )
}