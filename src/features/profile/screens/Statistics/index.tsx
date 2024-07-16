import * as React from 'react';

import * as S from './index.styles';
import { useAuthStore } from '../../../../stores/useAuthStore';
import {
  getTravelsUserCount,
  getTravelstotalSpent,
} from '../../../../api/travel';
import { formatCurrency } from '../../../../utils/currency';

export function Statistics() {
  const user = useAuthStore((state) => state.user);
  const [count, setCount] = React.useState<number>(0);
  const [totalSpent, setTotalSpent] = React.useState<number>(0);

  React.useEffect(() => {
    const getDataTravels = async () => {
      if (user?.id) {
        const countTravel = await getTravelsUserCount(user.id);
        setCount(countTravel);

        const spentData = await getTravelstotalSpent(user.id);

        setTotalSpent(spentData);
      }
    };
    getDataTravels();
  }, [user]);

  return (
    <S.Wrapper>
      <S.Section>
        <S.Label>Número de Viagens:</S.Label>
        <S.StyledTextInput value={String(count)} />
      </S.Section>
      <S.Section>
        <S.Label>Gastos totais:</S.Label>
        <S.StyledTextInput
          value={formatCurrency(
            Number.parseFloat(String(totalSpent)).toFixed(2)
          )}
        />
      </S.Section>
    </S.Wrapper>
  );
}
