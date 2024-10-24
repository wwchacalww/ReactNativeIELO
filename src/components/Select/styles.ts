import styled, { DefaultTheme } from "styled-components/native";
import { MaterialIcons} from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
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
`;
export const SelectInput = styled(Picker)`
  flex: 1;
  color: #6c6c80;
  font-size: 16px;
  font-family: ${({theme}:{theme: DefaultTheme}) => theme.FONT_FAMILY.OPEN_REGULAR};
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 16px;
  color: ${({theme}:{theme: DefaultTheme}) => theme.COLORS.GRAY_300};
`;