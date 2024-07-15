import * as React from 'react';
import * as S from './index.styles';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  ICompanion,
  createCompanion,
} from '../../../../../api/travel/companion';
import { uploadImage } from '../../../../../api/image';
import { useRoute } from '@react-navigation/native';

export function AddCompanion() {
  const [imageSelected, setSelectedImage] = React.useState(null);
  const route = useRoute();
  const { travelId } = route.params as any;
  const [companion, setCompanion] = React.useState<ICompanion>({
    name: '',
    description: '',
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
        setSelectedImage(response.assets?.[0] as any);
      }
    });
  };

  const handleAddCompanion = async () => {
    try {
      const uploadedImage = await uploadImage(imageSelected);
      console.log('Image uploaded:', uploadedImage);

      setCompanion({ ...companion, imageId: uploadedImage.id });

      const newCompanion = await createCompanion({
        ...companion,
        imageId: uploadedImage.id,
      });
      console.log('Companion created:', newCompanion);

      setCompanion({
        name: '',
        description: '',
        tripId: 0,
        imageId: 0,
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error creating companion:', error);
    }
  };

  return (
    <S.Wrapper paddingTop={30}>
      <S.Section>
        <S.Label>Nome:</S.Label>
        <S.StyledTextInput
          placeholder="Nome"
          value={companion.name}
          onChangeText={(text) => setCompanion({ ...companion, name: text })}
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
        <S.AddButton onPress={() => handleAddCompanion()}>
          <S.AddButtonText>Adicionar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
