import * as React from 'react';

import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';
import {IUser, createUser} from '../../../../api/auth';
import {AuthContext} from '../../../../context/authContext';

export function Register() {
  const {navigate} = useNavigation();
  const {register} = React.useContext(AuthContext);
  const [account, setAccount] = React.useState<IUser>({
    age: 0,
    city: '',
    country: '',
    email: '',
    name: '',
    password: '',
  });

  const onSave = async () => {
    await register(account).then(async () => {
      navigate('Initial');
    });
  };

  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Criação de conta:</S.Label>
      </S.Section>
      <S.Section>
        <S.Label>Nome:</S.Label>
        <S.StyledTextInput
          placeholder="Nome"
          onChangeText={text => setAccount({...account, name: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Idade:</S.Label>
        <S.StyledTextInput
          placeholder="Idade"
          onChangeText={text => setAccount({...account, age: Number(text)})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Cidade / Estado:</S.Label>
        <S.StyledTextInput
          placeholder="Cidade / Estado"
          onChangeText={text => setAccount({...account, city: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>País:</S.Label>
        <S.StyledTextInput
          placeholder="País"
          onChangeText={text => setAccount({...account, country: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput
          placeholder="Email"
          onChangeText={text => setAccount({...account, email: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Senha:</S.Label>
        <S.StyledTextInput
          secureTextEntry={true}
          placeholder="Senha"
          onChangeText={text => setAccount({...account, password: text})}
        />
      </S.Section>

      <S.CenteredView>
        <S.AddButton onPress={() => onSave()}>
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
