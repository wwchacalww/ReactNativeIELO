import { createDrawerNavigator } from "@react-navigation/drawer";
import { AddPatient } from "@screens/AddPatient";
import { AddProfessional } from "@screens/AddProfessional";
import { Appointment } from "@screens/Apointment"
import { ControlPanel } from "@screens/ControlPanel";
import { Login } from "@screens/Login";
import { Text } from "react-native";
import { useTheme } from "styled-components/native";


const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
const {COLORS, FONT_FAMILY, FONT_SIZE} = useTheme();

  return (
    <Navigator 
      screenOptions={
        {
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.BLUE_600
          }
        }
      } 
    >
      <Screen 
        name="login"
        component={Login}
      />
      <Screen 
        name="addPatient"
        component={AddPatient}
        options={
          {
            drawerLabel: (() => <Text style={{
              fontFamily: FONT_FAMILY.OPEN_REGULAR,
              fontSize: FONT_SIZE.MD,
              color: COLORS.WHITE,
            }}>Novo Paciente</Text>)
          }
        }
      />
      <Screen
        name="addProfessional"
        component={AddProfessional}
        options={
          {
            drawerLabel: (() => <Text style={{
              fontFamily: FONT_FAMILY.OPEN_REGULAR,
              fontSize: FONT_SIZE.MD,
              color: COLORS.WHITE,
            }}>Novo Profissional</Text>)
          }
        }
      />
      <Screen 
        name="appointment"
        component={Appointment}
        options={
          {
            drawerLabel: (() => <Text style={{
              fontFamily: FONT_FAMILY.OPEN_REGULAR,
              fontSize: FONT_SIZE.MD,
              color: COLORS.WHITE,
            }}>Agendar</Text>)
          }
        }
      />
      <Screen 
        name="controlPainel"
        component={ControlPanel}
        options={
          {
            drawerLabel: (() => <Text style={{
              fontFamily: FONT_FAMILY.OPEN_REGULAR,
              fontSize: FONT_SIZE.MD,
              color: COLORS.WHITE,
            }}>Painel de Controle</Text>)
          }
        }
      />
    </Navigator>
  )
}