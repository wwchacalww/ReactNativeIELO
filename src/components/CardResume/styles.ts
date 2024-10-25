import styled, {DefaultTheme, css} from "styled-components/native";


export const Container = styled.View`
  min-width: 280px;
  max-width: 280px;
  min-height: 60px;
  max-height: fit-content;
  background-color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.WHITE};
  border-radius: 10px;
  flex-direction: column;
`;

export const Text = styled.Text`
  padding: 4px 8px;
  ${({theme}:{theme: DefaultTheme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.OPEN_BOLD};
  `};
`;

export const Title = styled.Text`
  padding-right: 8px;
  text-align: right;
  margin: 0px;
  ${({theme}:{theme: DefaultTheme}) => css`
    color: ${theme.COLORS.BLUE_600};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.ARI_BOLD};
  `};
`;