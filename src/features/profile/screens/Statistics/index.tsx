import * as React from 'react';

import * as S from './index.styles';

export function Statistics() {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Número de Viagens:</S.Label>
        <S.StyledTextInput value={String(4)} />
      </S.Section>
      <S.Section>
        <S.Label>Gastos totais:</S.Label>
        <S.StyledTextInput value={'R$ 40.000,00'} />
      </S.Section>
    </S.Wrapper>
  );
}
