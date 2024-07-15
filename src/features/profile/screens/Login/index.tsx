import * as React from 'react';

import * as S from './index.styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../../context/authContext';

export function Login() {
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Entre com usa conta:</S.Label>
      </S.Section>

      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput
          onChangeText={(text) => onChangeEmail(text)}
          placeholder="Email"
        />
      </S.Section>
      <S.Section>
        <S.Label>Senha:</S.Label>
        <S.StyledTextInput
          onChangeText={(text) => onChangePassword(text)}
          secureTextEntry={true}
          placeholder="Senha"
        />
      </S.Section>
      <S.Section>
        <S.Label onPress={() => navigation.navigate('ForgetPassword')}>
          Esqueci minha senha
        </S.Label>
      </S.Section>
      <S.CenteredView>
        <S.AddButton onPress={() => login(email, password)}>
          <S.AddButtonText>Entrar</S.AddButtonText>
        </S.AddButton>
        <S.Section>
          <S.Label>
            Não possui uma conta?
            <S.Label onPress={() => navigation.navigate('Register')}>
              {' '}
              Cadastre-se!
            </S.Label>
          </S.Label>
        </S.Section>
      </S.CenteredView>
    </S.Wrapper>
  );
}
