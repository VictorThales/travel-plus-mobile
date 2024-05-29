import * as React from 'react';
import * as S from './index.styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {useRoute} from '@react-navigation/native';
import {ICreatePlace, createPlace} from '../../../../../api/travel/places';
import {uploadImage} from '../../../../../api/image';
import RatingStars from '../../../../../components/RatingStars';
import {Alert} from 'react-native';

export function AddPlace() {
  const [imageSelected, setSelectedImage] = React.useState(null);
  const route = useRoute();
  const {travelId} = route.params as any;
  const [place, setPlace] = React.useState<ICreatePlace>({
    name: '',
    date: new Date(),
    type: '',
    rating: 0,
    spent: 0,
    tripId: travelId,
    imageId: 0,
  });

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.assets?.[0] as any;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleAddPlace = async () => {
    try {
      const uploadedImage = await uploadImage(imageSelected);
      const newPlace = await createPlace({
        ...place,
        imageId: uploadedImage.id,
      });
      console.log('Place created:', newPlace);

      setPlace({
        name: '',
        date: '',
        type: '',
        rating: 0,
        tripId: 0,
        imageId: 0,
        spent: 0,
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error creating place:', error);
    }
  };

  return (
    <S.Wrapper paddingTop={30}>
      <S.Section>
        <S.Label>Nome:</S.Label>
        <S.StyledTextInput
          placeholder="Nome"
          value={place.name}
          onChangeText={text => setPlace({...place, name: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Data:</S.Label>
        <S.StyledTextInput
          placeholder="Data"
          value={String(place.date)}
          onChangeText={text => setPlace({...place, date: new Date(text)})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Valor Gasto:</S.Label>
        <S.StyledTextInput
          placeholder="Valor Gasto"
          value={String(place.spent)}
          onChangeText={text => setPlace({...place, spent: Number(text)})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Tipo:</S.Label>
        <S.StyledTextInput
          placeholder="Tipo"
          value={place.type}
          onChangeText={text => setPlace({...place, type: text})}
        />
      </S.Section>
      <S.Section>
        <S.Label>Imagem:</S.Label>
        <S.ImageButton onPress={() => openImagePicker()}>
          <S.StyledImage
            source={
              !imageSelected
                ? {
                    uri: 'https://as1.ftcdn.net/v2/jpg/01/80/31/10/1000_F_180311099_Vlj8ufdHvec4onKSDLxxdrNiP6yX4PnP.jpg',
                  }
                : {uri: imageSelected.uri}
            }
          />
        </S.ImageButton>
      </S.Section>
      <S.Section>
        <S.Label>Avaliação:</S.Label>
        <RatingStars
          maxStars={5}
          onRatingChange={(item: number) => Alert.alert(String(item))}
        />
      </S.Section>
      <S.CenteredView>
        <S.AddButton onPress={() => handleAddPlace()}>
          <S.AddButtonText>Adicionar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
