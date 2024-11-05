import { Appointment, Container, Name, Text } from "./styles";


type Props = {
  appointment: string;
  professional: string;
  professional_name: string;
  patient_name: string;
}

export function CardAppointment({appointment, professional, professional_name, patient_name}: Props) {
  return (
    <Container>
      <Appointment>{appointment}</Appointment>
      <Text style={{textAlign: "left"}}>{professional}</Text>
      <Name>{professional_name}</Name>
      <Text style={{textAlign: "right"}}>Paciente</Text>
      <Name style={{textAlign: "right"}}>{patient_name}</Name>
    </Container>
  );
}