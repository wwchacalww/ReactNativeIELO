import { Input } from "@components/Input";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { ScrollView } from "react-native";
import { Button } from "@components/Button";


export function AddProfessional() {
  return(
    <Container>
      <Header title="novo profissonal"/>
        <ScrollView 
          style={{width: "100%", marginTop: 32}} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
        >
          <Input icon="person" placeholder="Nome" />
          <Input icon="mail" placeholder="E-mail" keyboardType="email-address" />
          <Input icon="calendar-month" placeholder="Data de Nascimento dd/mm/YYYY" />
          <Input icon="dialpad" placeholder="CPF" />
          <Input icon="home" placeholder="Endereço" />
          <Input icon="send-to-mobile" placeholder="Celular" />
          <Input icon="assignment-ind" placeholder="Especialidade" />
          <Input icon="badge" placeholder="Cód Conselho Regional" />
          <Input icon="edit" placeholder="Observação" />
          <Button title="Salvar" style={{marginTop: 18}} />
        </ScrollView>
    </Container>
  )
}