import * as React from 'react';

import * as S from './index.styles';

export function AddTravel() {
  return (
    <S.Wrapper paddingTop={30}>
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
    </S.Wrapper>
  );
}
