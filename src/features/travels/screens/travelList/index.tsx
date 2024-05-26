import * as React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';

export function Travels() {
  const navigation = useNavigation();

  interface buttonInterface {
    title: string;
    date: string;
    link: string;
  }

  const LinksData: buttonInterface[] = [
    {
      title: 'Dados Pessoais',
      date: '10/05/2024 - 14/05/2024',
      link: 'Travel',
    },
    {
      title: 'Endereços',
      date: '10/05/2024 - 14/05/2024',
      link: 'Travel',
    },
    {
      title: 'Segurança',
      date: '10/05/2024 - 14/05/2024',
      link: 'Travel',
    },
    {
      title: 'Comunicações',
      date: '10/05/2024 - 14/05/2024',
      link: 'Travel',
    },
  ];

  const LinkContent = () => {
    return LinksData.map((item, index) => (
      <S.NavigationWrapper
        onPress={() => navigation.navigate(item.link as never)}>
        <S.ProfileLinks key={index}>
          <S.TextInfosWrapper>
            <S.TextInfos>{item.title}</S.TextInfos>
            <S.TextInfos>{item.date}</S.TextInfos>
          </S.TextInfosWrapper>
          <S.IconWrapper>
            <Icon name="arrowright" size={30} color={'black'} />
          </S.IconWrapper>
        </S.ProfileLinks>
      </S.NavigationWrapper>
    ));
  };

  return (
    <S.Wrapper paddingTop={30}>
      <S.ProfileLinksWrapper>{LinkContent()}</S.ProfileLinksWrapper>
    </S.Wrapper>
  );
}
