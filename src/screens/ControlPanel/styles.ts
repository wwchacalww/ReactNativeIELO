import { SafeAreaView } from "react-native-safe-area-context";
import styled, {DefaultTheme as DT} from "styled-components/native";


export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}:{theme: DT}) => theme.COLORS.BLUE_600};
  padding: 12px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: baseline;
`;