import * as React from 'react';
import * as S from './index.styles';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  createDestination,
  ICreateDestination,
} from '../../../../../api/travel/destination';
import { uploadImage } from '../../../../../api/image';
import { useRoute } from '@react-navigation/native';

export function AddDestination() {
  const [imageSelected, setSelectedImage] = React.useState(null);
  const route = useRoute();
  const { travelId } = route.params as any;
  const [destination, setDestination] = React.useState<ICreateDestination>({
    name: '',
    date: new Date(),
    location: '',
    estimatedCost: 0,
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

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        console.log({ response: response.assets?.[0] });
        setSelectedImage(response.assets?.[0] as any);
      }
    });
  };

  const handleAddDestination = async () => {
    try {
      const uploadedImage = await uploadImage(imageSelected);
      console.log('Image uploaded:', uploadedImage);

      setDestination({ ...destination, imageId: uploadedImage.id });

      const newDestination = await createDestination({
        ...destination,
        imageId: uploadedImage.id,
      });
      console.log('Destination created:', newDestination);

      setDestination({
        name: '',
        date: new Date(),
        location: '',
        estimatedCost: 0,
        tripId: 0,
        imageId: 0,
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error creating destination:', error);
    }
  };

  return (
    <S.Wrapper paddingTop={30}>
      <S.Section>
        <S.Label>Título:</S.Label>
        <S.StyledTextInput
          placeholder="Título"
          value={destination.name}
          onChangeText={(text) =>
            setDestination({ ...destination, name: text })
          }
        />
      </S.Section>
      <S.Section>
        <S.Label>Data:</S.Label>
        <S.StyledTextInput
          placeholder="Data"
          value={destination.date.toString()}
          onChangeText={(text) =>
            setDestination({ ...destination, date: new Date(text) })
          }
        />
      </S.Section>
      <S.Section>
        <S.Label>Gasto Estimado:</S.Label>
        <S.StyledTextInput
          placeholder="Gasto Estimado"
          value={destination.estimatedCost.toString()}
          onChangeText={(text) =>
            setDestination({ ...destination, estimatedCost: parseInt(text) })
          }
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
                : { uri: imageSelected.uri }
            }
          />
        </S.ImageButton>
      </S.Section>
      <S.CenteredView>
        <S.AddButton onPress={() => handleAddDestination()}>
          <S.AddButtonText>Adicionar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
