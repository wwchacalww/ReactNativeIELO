import styled, {DefaultTheme as DT} from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}:{theme: DT}) => theme.COLORS.BLUE_600};
  padding: 12px;
`;
