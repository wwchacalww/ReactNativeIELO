import { SafeAreaView } from "react-native-safe-area-context";
import styled, {DefaultTheme} from "styled-components/native";

type ThemeProps = {
  theme: DefaultTheme
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }:ThemeProps) => theme.COLORS.BLUE_600};
  padding: 24px;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${({theme}:ThemeProps) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}:ThemeProps) => theme.FONT_FAMILY.ARI_BOLD};
  color: ${({theme}:ThemeProps) => theme.COLORS.WHITE};
  margin-bottom: 24px;
`;
