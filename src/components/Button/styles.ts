import { TouchableOpacity } from "react-native";
import styled, {css, DefaultTheme} from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  width: 100%;
  min-height: 60px;
  max-height: 60px;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_400 : theme.COLORS.RED_DARK};

  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({theme}: {theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.ARI_BOLD};
  `}
`;