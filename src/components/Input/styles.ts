import styled, { css, DefaultTheme } from "styled-components/native";
import { MaterialIcons} from '@expo/vector-icons';

type ContainerProps = {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  margin-bottom: 18px;
  padding: 0 16px;
  background: #f0f0f5;
  border-radius: 10px;
  border-width: 2px;
  border-color: #f0f0f5;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #c72828;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #6c6c80;
  font-size: 16px;
  font-family: ${({theme}:{theme: DefaultTheme}) => theme.FONT_FAMILY.OPEN_REGULAR};
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 16px;
  color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.GRAY_300};
`;