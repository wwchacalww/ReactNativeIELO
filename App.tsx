import { Arima_400Regular, Arima_700Bold, useFonts } from '@expo-google-fonts/arima';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { AddPatient } from '@screens/AddPatient';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [ ariLoaded ] = useFonts({Arima_400Regular, Arima_700Bold, OpenSans_400Regular, OpenSans_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { ariLoaded ? <AddPatient /> : <Text>Carregando...</Text>}
    </ThemeProvider>
  );
}


