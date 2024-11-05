import styled, {DefaultTheme, css} from "styled-components/native";


export const Container = styled.View`
  flex-direction: column;

  width: 100%;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.WHITE};
  
  padding: 0px 10px;
  gap: 0px;
  margin-top: 4px;
`;

export const Appointment = styled.Text`
  text-align: center;
  ${({theme}:{theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.OPEN_BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Text = styled.Text`
  width: 100%;
  ${({theme}:{theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.OPEN_REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `};
`;

export const Name = styled.Text`
  width: 100%;
  ${({theme}:{theme: DefaultTheme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.OPEN_BOLD};
    color: ${theme.COLORS.BLUE_600};
  `};
`;