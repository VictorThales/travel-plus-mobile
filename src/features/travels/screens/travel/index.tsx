import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './index.styles';
import {FlatList, Image, ScrollView, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Travel() {
  const navigation = useNavigation();
  const destinationData = [
    {
      title: 'parque da nações',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
    {
      title: 'parque da nações',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
    {
      title: 'parque da nações',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
  ];

  const placeData = [
    {
      title: 'Restaurante',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
    {
      title: 'Restaurante',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
    {
      title: 'Restaurante',
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      date: '10/05/2024',
      spent: 'R$ 170,00',
    },
  ];

  const companionData = [
    {
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      name: 'Marcos',
    },
    {
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      name: 'Pedro',
    },
    {
      image:
        'https://img.freepik.com/fotos-gratis/topo-da-vista-da-montanha_23-2150528665.jpg',
      name: 'Thiago',
    },
  ];

  return (
    <S.Wrapper paddingTop={30}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Section>
          <S.SectionHeader>
            Orçamento:
            <S.IconWrapper>
              <Icon name="pencil" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
          <S.SectionHeader>5.0000</S.SectionHeader>
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            Destinos:
            <S.IconWrapper
              onPress={() => navigation.navigate('AddDestination')}>
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={destinationData}
            renderItem={({item}) => (
              <S.ListItemContainer>
                <S.SectionHeader>{item.title}</S.SectionHeader>
                <S.ListItemImage source={{uri: item.image}} />
                <S.SectionHeader>Data: {item.date}</S.SectionHeader>
                <S.SectionHeader>Gasto Est.: {item.spent}</S.SectionHeader>
              </S.ListItemContainer>
            )}
          />
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            Acompanhantes:
            <S.IconWrapper onPress={() => navigation.navigate('AddCompanion')}>
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={companionData}
            renderItem={({item}) => (
              <S.ListItemContainer style={{alignItems: 'center'}}>
                <S.ListItemImage
                  source={{uri: item.image}}
                  width={125}
                  height={125}
                  borderRadius={99}
                />
                <S.SectionHeader>{item.name}</S.SectionHeader>
              </S.ListItemContainer>
            )}
          />
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            Lugares:
            <S.IconWrapper onPress={() => navigation.navigate('AddPlace')}>
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={placeData}
            renderItem={({item}) => (
              <S.ListItemContainer>
                <S.SectionHeader>{item.title}</S.SectionHeader>
                <S.ListItemImage source={{uri: item.image}} />
                <S.SectionHeader>Data: {item.date}</S.SectionHeader>
                <S.SectionHeader>Gasto: {item.spent}</S.SectionHeader>
              </S.ListItemContainer>
            )}
          />
        </S.Section>

        <S.Section style={{marginTop: 30, marginBottom: 150}}>
          <S.SectionHeader>Diário</S.SectionHeader>
          <S.InputContainer>
            <S.StyledTextInput
              multiline
              numberOfLines={4}
              onChangeText={() => null}
              value="teste"
            />
          </S.InputContainer>
        </S.Section>
      </ScrollView>
    </S.Wrapper>
  );
}
