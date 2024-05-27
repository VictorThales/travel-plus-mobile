import * as React from 'react';

import * as S from './index.styles';
import {useAuthStore} from '../../../../../stores/useAuthStore';

export function AddTravel() {
  const user = useAuthStore(state => state.user);
  return (
    <S.Wrapper paddingTop={30}>
      {user ? (
        <>
          <S.Section>
            <S.Label>Título:</S.Label>
            <S.StyledTextInput placeholder="Título" />
          </S.Section>
          <S.Section>
            <S.Label>Descrição:</S.Label>
            <S.StyledTextInput placeholder="Descrição" />
          </S.Section>
          <S.Section>
            <S.Label>Orçamento:</S.Label>
            <S.StyledTextInput placeholder="Orçamento" />
          </S.Section>

          <S.CenteredView>
            <S.AddButton>
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
