import { Input } from "@components/Input";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { ScrollView } from "react-native";
import { Button } from "@components/Button";
import { useState } from "react";
import { Select } from "@components/Select";


export function AddPatient() {
  const [value, setValue] = useState("")
  const items = [
    { label : "Forma de Pagamento", value:""},
    { label : "Particular", value:"particular"},
    { label : "INAS-GDF Saúde", value:"inas-gdf-saude"},
    { label : "Amil", value:"amil"},

  ]
  return(
    <Container>
      <Header title="novo paciente"/>
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
          <Input icon="assignment-ind" placeholder="Responsável" />
          <Input icon="badge" placeholder="Grau de Parentesco" />
          <Input icon="edit" placeholder="CPF do Responsável" />
          <Select 
            icon="attach-money" 
            placeholder="Forma de Pagamento"
            items={items}
            value={value}
            setValue={setValue as ()=> void}
          />
          <Button title="Salvar" style={{marginTop: 18}} />
        </ScrollView>
    </Container>
  )
}