import styled, {DefaultTheme, css} from "styled-components/native";
import { MaterialIcons} from '@expo/vector-icons';


export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Title = styled.Text`
  text-align: center;
  text-transform: uppercase;
  ${({theme}:{theme:DefaultTheme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.OPEN_BOLD};
  `};
`;

export const MenuButton = styled.TouchableOpacity``;

export const MenuIcon = styled(MaterialIcons).attrs(({theme}:{theme:DefaultTheme })=> ({
  color: theme.COLORS.WHITE,
  size: 32,
  name: "menu"
}))``;