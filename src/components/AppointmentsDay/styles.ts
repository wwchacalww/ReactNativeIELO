import styled, {DefaultTheme, css} from "styled-components/native";
import { MaterialIcons} from '@expo/vector-icons';


export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin: 5px 0px 10px 0px;

  background-color: ${({theme}:{theme:DefaultTheme}) => theme.COLORS.GRAY_100};
  border-radius: 6px;
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const TitleHead = styled.Text`
  ${({theme}:{theme: DefaultTheme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.OPEN_REGULAR};
  `};
`;

export const Title = styled.Text`
  text-align: center;
  padding: 16px;
  ${({theme}:{theme: DefaultTheme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.OPEN_BOLD};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({theme}:{theme:DefaultTheme })=> ({
  color: theme.COLORS.GRAY_600,
  size: 24,
}))``;
