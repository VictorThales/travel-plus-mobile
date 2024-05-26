import * as React from 'react';

import * as S from './index.styles';

export function UpdatePassword() {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Mudança de senha:</S.Label>
      </S.Section>

      <S.Section>
        <S.Label>Nova senha:</S.Label>
        <S.StyledTextInput secureTextEntry={true} placeholder="Nova senha" />
      </S.Section>
      <S.Section>
        <S.Label>Confirme a nova senha:</S.Label>
        <S.StyledTextInput
          secureTextEntry={true}
          placeholder="Confirme a nova senha"
        />
      </S.Section>

      <S.CenteredView>
        <S.AddButton disabled={true}>
          <S.AddButtonText>Atualizar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
