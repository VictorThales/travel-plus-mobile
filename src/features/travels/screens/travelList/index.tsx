import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './index.styles';
import {useNavigation} from '@react-navigation/native';
import {Swipeable} from 'react-native-gesture-handler';
import {ActivityIndicator, Alert} from 'react-native';
import {useAuthStore} from '../../../../stores/useAuthStore';
import {ITravel, deleteTravel, getTravels} from '../../../../api/travel';
import {useFocusEffect} from '@react-navigation/native';

export function Travels() {
  const navigation = useNavigation();
  const [list, setList] = useState<ITravel[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const swipeableRef = useRef(null);
  const user = useAuthStore(state => state.user);

  const LinkContent = () => {
    return list.map((item, index) => (
      <Swipeable
        key={index}
        renderRightActions={() => renderRightActions(item.id)}
        ref={swipeableRef}>
        <S.NavigationWrapper
          onPress={() => navigation.navigate('Travel', {travelId: item.id})}>
          <S.ProfileLinks key={index}>
            <S.TextInfosWrapper>
              <S.TextInfos>{item.name}</S.TextInfos>
              {item.date ? <S.TextInfos>{item.date}</S.TextInfos> : <></>}
            </S.TextInfosWrapper>
            <S.IconWrapper>
              <Icon name="arrowright" size={30} color={'black'} />
            </S.IconWrapper>
          </S.ProfileLinks>
        </S.NavigationWrapper>
      </Swipeable>
    ));
  };

  useFocusEffect(
    React.useCallback(() => {
      const getListTravels = async () => {
        if (user?.id) {
          const travels = await getTravels(user?.id);
          console.log({travels});
          setList(travels);
        }
      };
      getListTravels();
    }, [user]),
  );

  useEffect(() => {
    console.log({useEffect: user});
    const getListTravels = async () => {
      if (user?.id) {
        await getTravels(user?.id)
          .then(travels => {
            setList(travels);
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      }
    };
    getListTravels();
  }, [user]);

  const onDeleteTravel = async (id: number) => {
    await deleteTravel(id)
      .then(() => setList(list.filter(item => item.id !== id)))
      .catch(err => console.warn('Erro ao deletar a viagem', err));
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
            onPress: () => onDeleteTravel(id),
          },
        ])
      }>
      <S.DeleteButtonText>Delete</S.DeleteButtonText>
    </S.DeleteButton>
  );

  return (
    <S.Wrapper paddingTop={30}>
      {loading && user ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          {!list.length && !loading && (
            <S.TextNoLoggedWrapper>
              <S.TextNoLogged>Nenhuma viagem cadastrada!</S.TextNoLogged>
            </S.TextNoLoggedWrapper>
          )}

          {user ? (
            <S.ProfileLinksWrapper>{LinkContent()}</S.ProfileLinksWrapper>
          ) : (
            <S.TextNoLoggedWrapper>
              <S.TextNoLogged>
                Faça o login para visualizar suas viagens
              </S.TextNoLogged>
            </S.TextNoLoggedWrapper>
          )}
        </>
      )}
    </S.Wrapper>
  );
}
