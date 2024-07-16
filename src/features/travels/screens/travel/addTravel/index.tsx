import * as React from 'react';

import * as S from './index.styles';
import { useAuthStore } from '../../../../../stores/useAuthStore';
import { ICreateTravel, createTravel } from '../../../../../api/travel';
import { useNavigation } from '@react-navigation/native';
import { formatCurrency } from '../../../../../utils/currency';

export function AddTravel() {
  const user = useAuthStore((state) => state.user);
  const navigation = useNavigation();

  const [travel, setTravel] = React.useState<ICreateTravel>({
    name: '',
    description: '',
    budget: 0,
    userId: user ? user?.id : 0,
  });

  const onSave = () => {
    createTravel(travel);
    navigation.navigate('Initial');
    setTravel({
      name: '',
      description: '',
      budget: 0,
      userId: user ? user?.id : 0,
    });
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
              value={travel.name}
            />
          </S.Section>
          <S.Section>
            <S.Label>Descrição:</S.Label>
            <S.StyledTextInput
              placeholder="Descrição"
              onChangeText={(text) =>
                setTravel({ ...travel, description: text })
              }
              value={travel.description}
            />
          </S.Section>
          <S.Section>
            <S.Label>Orçamento:</S.Label>
            <S.StyledTextInput
              placeholder="Orçamento"
              onChangeText={(text) =>
                setTravel({
                  ...travel,
                  budget:
                    parseFloat(
                      text.replace('R$ ', '').replace('.', '').replace(',', '.')
                    ) || 0,
                })
              }
              value={formatCurrency(travel.budget.toString())}
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
