import * as React from 'react';

import * as S from './index.styles';
import { useAuthStore } from '../../../../../stores/useAuthStore';
import { ICreateTravel, createTravel } from '../../../../../api/travel';
import { useNavigation } from '@react-navigation/native';

export function AddTravel() {
  const user = useAuthStore((state) => state.user);
  const navigation = useNavigation();
  console.log({ user });
  const [travel, setTravel] = React.useState<ICreateTravel>({
    name: '',
    description: '',
    budget: 0,
    userId: user ? user?.id : 0,
  });

  const onSave = () => {
    createTravel(travel);
    navigation.navigate('Initial');
  };

  return (
    <S.Wrapper paddingTop={30}>
      {user ? (
        <>
          <S.Section>
            <S.Label>Título:</S.Label>
            <S.StyledTextInput
              placeholder="Título"
              onChangeText={(text) => setTravel({ ...travel, name: text })}
            />
          </S.Section>
          <S.Section>
            <S.Label>Descrição:</S.Label>
            <S.StyledTextInput
              placeholder="Descrição"
              onChangeText={(text) =>
                setTravel({ ...travel, description: text })
              }
            />
          </S.Section>
          <S.Section>
            <S.Label>Orçamento:</S.Label>
            <S.StyledTextInput
              keyboardType="number-pad"
              placeholder="Orçamento"
              onChangeText={(text) =>
                setTravel({ ...travel, budget: Number(text) })
              }
            />
          </S.Section>

          <S.CenteredView>
            <S.AddButton onPress={() => onSave()}>
              <S.AddButtonText>Adicionar</S.AddButtonText>
            </S.AddButton>
          </S.CenteredView>
        </>
      ) : (
        <>
          <S.CenteredView>
            <S.Section>
              <S.Label>Faça o login para adicionar uma viagem:</S.Label>
            </S.Section>
          </S.CenteredView>
        </>
      )}
    </S.Wrapper>
  );
}
