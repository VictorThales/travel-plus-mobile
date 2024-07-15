import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export const Wrapper = styled(View)<{ paddingTop?: number }>`
  flex: 1;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const IconWrapper = styled(TouchableOpacity)`
  justify-content: center;
  padding-left: 10px;
`;

export const Section = styled.View`
  margin-top: 15px;
`;

export const SectionHeader = styled(Text)`
  display: flex;
  align-items: center;
`;

export const ListItemContainer = styled(View)`
  width: 150px;
`;

export const ListItemImage = styled(Image)`
  width: ${(props) => props.width || 140}px;
  height: ${(props) => props.height || 169}px;
  border-radius: ${(props) => props.borderRadius || 10}px;
`;

export const InputContainer = styled(View)`
  margin-top: 15px;
  border-style: solid;
  border-top-color: black;
  border-width: 0.5px;
  border-radius: 10px;
`;

export const StyledTextInput = styled(TextInput)`
  height: 200px;
  padding: 7px;
`;
