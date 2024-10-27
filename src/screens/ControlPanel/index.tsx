import { Header } from "@components/Header";
import { Container, Content } from "./styles";
import { CardResume } from "@components/CardResume";
import { NavBarButtonsSelectDay } from "@components/NavBarButtonsSelectDay";
import { AppointmentsDay } from "@components/AppointmentsDay";
import { Button } from "@components/Button";

type Props = {
  selected: boolean;
  day: string;
  dayWeek: string;
}[];
type AppointmentsDayProps = {
  appointment: string;
  professional: string;
  professional_name: string;
  patient_name: string;
}[]
export function ControlPanel() {
  const dayWeeks = [
    {
      selected: true,
      day: "27",
      dayWeek: "dom",
    },
    {
      selected: false,
      day: "28",
      dayWeek: "seg",
    },
    {
      selected: false,
      day: "29",
      dayWeek: "ter",
    },
    {
      selected: false,
      day: "30",
      dayWeek: "qua",
    },
    {
      selected: false,
      day: "31",
      dayWeek: "qui",
    },
    {
      selected: false,
      day: "01",
      dayWeek: "sex",
    },
    {
      selected: false,
      day: "02",
      dayWeek: "sáb",
    },
  ];
  const appointments: AppointmentsDayProps = [
    {
      appointment: '08:00 - 08:45',
      professional: 'Psicóloga',
      professional_name: 'Deleuse',
      patient_name: 'Fuluno de Tal'
    },
    {
      appointment: '08:45 - 09:30',
      professional: 'Psicóloga',
      professional_name: 'Deleuse',
      patient_name: 'Siclano'
    },
    {
      appointment: '08:45 - 09:30',
      professional: 'Psicólogo',
      professional_name: 'Jean Jacque Derrida',
      patient_name: 'John Doe'
    },
    {
      appointment: '14:45 - 15:30',
      professional: 'Nutricionista',
      professional_name: 'Bella Gil',
      patient_name: 'Totoro'
    },
    {
      appointment: '15:30 - 16:15',
      professional: 'Nutricionista',
      professional_name: 'Bella Gil',
      patient_name: 'John Doe'
    },
    {
      appointment: '14:45 - 15:30',
      professional: 'Nutricionista',
      professional_name: 'Bella Gil',
      patient_name: 'Totoro'
    },
  ];
  return (
    <Container>
      <Header title="Painel de Controle" />
      <Content>
        <CardResume qnt={13} title="25 OUT 2024" />
        <NavBarButtonsSelectDay props={dayWeeks} />
        <AppointmentsDay props={appointments} />
        <Button title="Agendar" />
      </Content>
    </Container>
  );
}

