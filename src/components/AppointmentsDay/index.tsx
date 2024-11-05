import { CardAppointment } from "@components/CardAppointment";
import { Container, FilterButton, Head, Icon, Title, TitleHead } from "./styles";

type Props = {
  appointment: string;
  professional: string;
  professional_name: string;
  patient_name: string;
}[]
export function AppointmentsDay({props}:{props: Props}) {
  return (
    <Container>
      <Head>
        <FilterButton>
          <Icon name="filter-list" />
          <TitleHead>Profissionais</TitleHead>
        </FilterButton>
        <FilterButton>
          <TitleHead>Caledário</TitleHead>
          <Icon name="calendar-month" />
        </FilterButton>
      </Head>
      {
        props.length > 0 ?
        props.map( (card, index) => (
          <CardAppointment 
            key={card.appointment+index.toString()}
            appointment={card.appointment} 
            professional={card.professional}
            professional_name={card.professional_name}
            patient_name={card.patient_name}
          />
        )) : (
          <Title>Sem atendimentos para este dia.</Title>
        )
      }
    </Container>
  )
}