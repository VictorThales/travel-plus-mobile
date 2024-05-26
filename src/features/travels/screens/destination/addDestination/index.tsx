import * as React from 'react';

import * as S from './index.styles';
import {launchImageLibrary} from 'react-native-image-picker';

export function AddDestination() {
  const [imageSelected, setSelectedImage] = React.useState('');

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
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <S.Wrapper paddingTop={30}>
      <S.Section>
        <S.Label>Título:</S.Label>
        <S.StyledTextInput placeholder="Título" />
      </S.Section>
      <S.Section>
        <S.Label>Data:</S.Label>
        <S.StyledTextInput placeholder="Data" />
      </S.Section>
      <S.Section>
        <S.Label>Gasto Estimado:</S.Label>
        <S.StyledTextInput placeholder="Gasto Estimado" />
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
                : {uri: imageSelected}
            }
          />
        </S.ImageButton>
      </S.Section>
      <S.CenteredView>
        <S.AddButton>
          <S.AddButtonText>Adicionar</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
