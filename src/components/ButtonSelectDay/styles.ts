import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

type ButtonSelectDayProps = {
  selected: boolean;
}

export const Container = styled.View<ButtonSelectDayProps>`
  min-width: 36px;
  max-width: 36px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonDay = styled(TouchableOpacity)<ButtonSelectDayProps>`
  min-width: 36px;
  max-width: 36px;
  min-height: 36px;
  max-height: 36px;
  padding-top: 2px;
  margin-bottom: 0;
  background-color: ${({theme, selected}) => 
    selected ? 
    theme.COLORS.YELLOW_500 : 
    theme.COLORS.WHITE
  };

  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<ButtonSelectDayProps>`
  color: ${({theme, selected}) => 
    selected ? 
    theme.COLORS.GRAY_700 : 
    theme.COLORS.GREEN_400
  };
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.ARI_BOLD};
  `}
`;

export const Day = styled.Text`
  margin-top: -2px;
  text-align: center;
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.ARI_BOLD};
  `}
`;