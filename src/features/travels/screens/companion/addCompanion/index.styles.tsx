import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)<{ paddingTop?: number }>`
  flex: 1;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Section = styled.View`
  margin-top: 12px;
`;

export const Label = styled(Text)`
  margin-bottom: 10px;
`;

export const StyledTextInput = styled(TextInput)`
  margin-top: 10px;
  padding-left: 10px;
`;

export const ImageButton = styled(TouchableOpacity)`
  margin-top: 12px;
  padding-left: 10px;
`;

export const StyledImage = styled(Image)`
  width: 133px;
  height: 133px;
  border-radius: 99px;
`;

export const CenteredView = styled(View)`
  align-items: center;
  margin-top: 50px;
`;

export const AddButton = styled(TouchableOpacity)`
  width: 327px;
  height: 48px;
  background-color: #556b2f;
  border-radius: 48px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;
