import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './index.styles';
import { FlatList, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {
  IDestination,
  getDestinationsByTripId,
} from '../../../../api/travel/destination';
import { getImage } from '../../../../api/image';
import {
  ICompanion,
  getCompanionsByTripId,
} from '../../../../api/travel/companion';
import { IPlace, getPlacesByTripId } from '../../../../api/travel/places';
interface IDestinationWithUri extends IDestination {
  uri?: string;
}
interface ICompanionWithUri extends ICompanion {
  uri?: string;
}

interface IPlaceWithUri extends IPlace {
  uri?: string;
}

export function Travel() {
  const navigation = useNavigation();
  const route = useRoute();
  const [destinationData, setDestinationData] =
    React.useState<IDestinationWithUri[]>();
  const [companionData, setCompanionData] =
    React.useState<ICompanionWithUri[]>();
  const [placeData, setPlaceData] = React.useState<IPlaceWithUri[]>();

  const { travelId } = route.params as any;

  const getDestinations = async () => {
    const data = await getDestinationsByTripId(travelId);

    const newData: IDestinationWithUri[] = [];

    data.map(async (item) => {
      const image = await fetchImage(item.imageId);
      console.log({ image });
      newData.push({ ...item, uri: image ? image : '' });
    });
    console.log({ newData });
    setDestinationData(newData);
  };

  const getCompanions = async () => {
    const data = await getCompanionsByTripId(travelId);
    console.log({ data });
    const newData: ICompanionWithUri[] = [];

    data.map(async (item) => {
      const image = await fetchImage(item.imageId);
      newData.push({ ...item, uri: image ? image : '' });
    });
    setCompanionData(newData);
  };

  const getPlaces = async () => {
    const data = await getPlacesByTripId(travelId);
    console.log({ data });
    const newData: IPlaceWithUri[] = [];

    data.map(async (item) => {
      const image = await fetchImage(item.imageId);
      newData.push({ ...item, uri: image ? image : '' });
    });
    setPlaceData(newData);
  };

  const fetchImage = async (imageId: number) => {
    try {
      console.log({ imageId });
      const blob = await getImage(imageId);
      console.log({ blob });
      const uri = URL.createObjectURL(blob);
      return uri;
    } catch (error) {
      console.error('Erro ao carregar imagem:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getDestinations();
      getCompanions();
      getPlaces();
    }, [])
  );

  React.useEffect(() => {
    getDestinations();
    getCompanions();
    getPlaces();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  };

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
          <S.SectionHeader>{}</S.SectionHeader>
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            Destinos:
            <S.IconWrapper
              onPress={() =>
                navigation.navigate('AddDestination', { travelId: travelId })
              }
            >
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={destinationData}
            renderItem={({ item }) => (
              <S.ListItemContainer>
                <S.SectionHeader>{item.name}</S.SectionHeader>
                <S.ListItemImage source={{ uri: item.uri }} />
                <S.SectionHeader>Data: {formatDate(item.date)}</S.SectionHeader>
                <S.SectionHeader>
                  Gasto Est.: {item.estimatedCost}
                </S.SectionHeader>
              </S.ListItemContainer>
            )}
          />
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            Acompanhantes:
            <S.IconWrapper
              onPress={() =>
                navigation.navigate('AddCompanion', { travelId: travelId })
              }
            >
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={companionData}
            renderItem={({ item }) => (
              <S.ListItemContainer style={{ alignItems: 'center' }}>
                <S.ListItemImage
                  source={{ uri: item.uri }}
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
            <S.IconWrapper
              onPress={() =>
                navigation.navigate('AddPlace', { travelId: travelId })
              }
            >
              <Icon name="plus-circle" size={15} color="black" />
            </S.IconWrapper>
          </S.SectionHeader>
        </S.Section>

        <S.Section>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={placeData}
            renderItem={({ item }) => (
              <S.ListItemContainer>
                <S.SectionHeader>{item.name}</S.SectionHeader>
                <S.ListItemImage source={{ uri: item.uri }} />
                <S.SectionHeader>Data: {formatDate(item.date)}</S.SectionHeader>
                <S.SectionHeader>Gasto: {item.type}</S.SectionHeader>
              </S.ListItemContainer>
            )}
          />
        </S.Section>

        <S.Section style={{ marginTop: 30, marginBottom: 150 }}>
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
