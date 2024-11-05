import { Input } from "@components/Input";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { ScrollView } from "react-native";
import { Button } from "@components/Button";
import { useState } from "react";
import { Select } from "@components/Select";
import { DataPicker } from "@components/DataPicker";

export function Apointment() {
  const [pros, setPros] = useState("");
  const [patient, setPatient] = useState("");
  const [local, setLocal] = useState("");
  const [payment, setPayment] = useState("");
  const [date, setDate] = useState(new Date());
  const professionals = [
    { label : "Profissional", value:""},
    { label : "Jean Jacque Derrida - Psicólogo", value:"id-01"},
    { label : "Sigmund Freud - Psicólogo", value:"id-02"},
    { label : "Bela Gil - Nutricionista", value:"id-03"},
  ];
  const patients = [
    { label : "Pacientes", value:""},
    { label : "Fulndo de Tal", value:"id-01"},
    { label : "Siclano da Silva", value:"id-02"},
    { label : "Hakuna Matata", value:"id-03"},
  ];
  const locals = [
    { label : "Local", value:""},
    { label : "Sala 01", value:"sala-01"},
    { label : "Sala 02", value:"sala-02"},
    { label : "Online", value:"online"},
  ];
  const payments = [
    { label : "Forma de Pagamento", value:""},
    { label : "Particular", value:"particular"},
    { label : "INAS-GDF Saúde", value:"inas"},
    { label : "Amil", value:"amil"},
  ];

  const onHandleSubmit = () => {
    const data = {
      "specialty": pros,
      "start":date.toString(),
      "end": date.toString(),
      "local":local,
      "payment":payment,
      "value":160,
      "professionalId":pros,
      "patientId":patient
    }
    console.log(data)
  }
  return(
    <Container>
      <Header title="Agendamento"/>
        <ScrollView 
          style={{width: "100%", marginTop: 32}} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
        >
          <Select 
            icon="account-circle" 
            placeholder="Forma de Pagamento"
            items={professionals}
            value={pros}
            setValue={setPros as ()=> void}
          />
          <Select 
            icon="person" 
            placeholder="Pacientes"
            items={patients}
            value={patient}
            setValue={setPatient as ()=> void}
          />
          <DataPicker 
            icon="calendar-month"  
            text={"Data do Agendamento"}
            date={date}
            setDate={setDate}
          />
          <DataPicker 
            icon="browse-gallery"  
            text={"Horário"}
            date={date}
            setDate={setDate}
            mode="time"
          />
          <Input icon="more-time" placeholder="Minutos de Consulta" keyboardType="numeric" />
          <Select 
            icon="home-work" 
            items={locals}
            value={local}
            setValue={setLocal as ()=> void}
          />
          <Select 
            icon="attach-money" 
            items={payments}
            value={payment}
            setValue={setPayment as ()=> void}
          />
          <Button title="Agendar" style={{marginTop: 18}} onPress={onHandleSubmit}/>
        </ScrollView>
    </Container>
  )
}