import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)<{paddingTop?: number}>`
  flex: 1;
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop : 0)}px;
  padding-left: 20px;
  padding-right: 20px;
`;

