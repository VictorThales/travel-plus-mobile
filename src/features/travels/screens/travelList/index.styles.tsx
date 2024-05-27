import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)<{paddingTop?: number}>`
  flex: 1;
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop : 0)}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ProfileInfo = styled(View)<{paddingTop?: number}>`
  display: flex;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  padding-top: ${({paddingTop}) => (paddingTop ? paddingTop : 0)}px;
  padding: 10px;
  shadow-color: #0003;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  elevation: 1;
  shadow-offset: 2px 2px;
`;

export const ProfileLinksWrapper = styled(View)<{paddingTop?: number}>`
  display: flex;
  margin-top: 50px;
`;
export const CancelText = styled(Text)<{color?: string}>`
  font-size: 16px;
  color: ${({color}) => (color ? color : 'black')};
`;
export const InfosWrapper = styled(View)`
  flex: 1;
`;
export const InfosText = styled(Text)<{color?: string}>`
  margin-top: 5px;
  padding: 0px;
`;
export const Link = styled(TouchableOpacity)``;

export const CancelWrapper = styled(View)<{paddingTop?: number}>`
  flex-direction: row;
  margin-top: 50px;
`;

export const ProfileLinks = styled(View)<{paddingTop?: number}>`
  display: flex;
  flex-direction: row;
  height: 80px;
  margin-top: 5px;
  background-color: white;
  shadow-color: #0003;
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  elevation: 1;
  shadow-offset: 2px 2px;
  border-radius: 10px;
`;
export const LinkIcon = styled(View)`
  justify-content: center;
  padding: 20px;
`;

export const TextInfos = styled(Text)`
  margin-top: 5px;
`;
export const TextInfosWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  padding-left: 30px;
`;

export const NavigationWrapper = styled(TouchableOpacity)``;

export const IconWrapper = styled(TouchableOpacity)`
  justify-content: center;
  padding: 20px;
`;

export const DeleteButton = styled(TouchableOpacity)`
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 75px;
`;

export const DeleteButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const TextNoLogged = styled.Text``;
export const TextNoLoggedWrapper = styled.View`
  align-items: center;
  margin-top: 62px;
`;
