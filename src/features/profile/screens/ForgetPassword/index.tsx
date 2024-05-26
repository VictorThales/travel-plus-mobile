import * as React from 'react';

import * as S from './index.styles';

export function ForgetPassword() {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>
          Um email será enviado com o link para a recuperação da conta!
        </S.Label>
      </S.Section>

      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput placeholder="Email" />
      </S.Section>

      <S.CenteredView>
        <S.AddButton disabled={true}>
          <S.AddButtonText>Enviar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
