import * as React from 'react';

import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';

export function Register() {
  const {navigate} = useNavigation();
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Criação de conta:</S.Label>
      </S.Section>
      <S.Section>
        <S.Label>Nome:</S.Label>
        <S.StyledTextInput placeholder="Nome" />
      </S.Section>
      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput placeholder="Email" />
      </S.Section>
      <S.Section>
        <S.Label>Senha:</S.Label>
        <S.StyledTextInput secureTextEntry={true} placeholder="Senha" />
      </S.Section>

      <S.CenteredView>
        <S.AddButton disabled={true}>
          <S.AddButtonText>Registrar</S.AddButtonText>
        </S.AddButton>
        <S.Section>
          <S.Label>
            Já possui uma conta?
            <S.Label onPress={() => navigate('Login')}> Login</S.Label>
          </S.Label>
        </S.Section>
        <S.Section>
          <S.Label
            style={{
              textAlign: 'center',
            }}>
            Clicando em registrar você está concordando com os Termos de Uso e
            Política de Privacidade
          </S.Label>
        </S.Section>
      </S.CenteredView>
    </S.Wrapper>
  );
}
