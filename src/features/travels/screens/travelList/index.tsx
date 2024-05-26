import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
import {Alert} from 'react-native';

interface buttonInterface {
  id: number;
  title: string;
  date: string;
  link: string;
}

const LinksData: buttonInterface[] = [
  {
    id: 1,
    title: 'Dados Pessoais',
    date: '10/05/2024 - 14/05/2024',
    link: 'Travel',
  },
  {
    id: 2,
    title: 'Endereços',
    date: '10/05/2024 - 14/05/2024',
    link: 'Travel',
  },
  {
    id: 3,
    title: 'Segurança',
    date: '10/05/2024 - 14/05/2024',
    link: 'Travel',
  },
  {
    id: 4,
    title: 'Comunicações',
    date: '10/05/2024 - 14/05/2024',
    link: 'Travel',
  },
];

export function Travels() {
  const navigation = useNavigation();
  const [list, setList] = useState<buttonInterface[]>(LinksData);
  const swipeableRef = useRef(null);

  const LinkContent = () => {
    return list.map((item, index) => (
      <Swipeable
        key={item.id}
        renderRightActions={() => renderRightActions(item.id)}
        ref={swipeableRef}>
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
      </Swipeable>
    ));
  };

  const renderRightActions = (id: number) => (
    <S.DeleteButton
      onPress={() =>
        Alert.alert('Excluir viagem', 'Você tem certeza', [
          {
            text: 'Cancel',
          },
          {
            text: 'OK',
            onPress: () => setList(list.filter(item => item.id !== id)),
          },
        ])
      }>
      <S.DeleteButtonText>Delete</S.DeleteButtonText>
    </S.DeleteButton>
  );

  return (
    <S.Wrapper paddingTop={30}>
      <S.ProfileLinksWrapper>{LinkContent()}</S.ProfileLinksWrapper>
    </S.Wrapper>
  );
}
