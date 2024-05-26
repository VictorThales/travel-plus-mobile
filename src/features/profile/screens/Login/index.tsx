import * as React from 'react';

import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Entre com usa conta:</S.Label>
      </S.Section>

      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput placeholder="Email" />
      </S.Section>
      <S.Section>
        <S.Label>Senha:</S.Label>
        <S.StyledTextInput secureTextEntry={true} placeholder="Senha" />
      </S.Section>
      <S.Section>
        <S.Label onPress={() => navigation.navigate('ForgetPassword')}>
          Esqueci minha senha
        </S.Label>
      </S.Section>
      <S.CenteredView>
        <S.AddButton disabled={true}>
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
