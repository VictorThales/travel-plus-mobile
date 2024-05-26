import * as React from 'react';

import * as S from './index.styles';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

export function Profile() {
  const [imageSelected, setSelectedImage] = React.useState('');
  const navigation = useNavigation();

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
    <S.Wrapper>
      <S.CenteredView>
        <S.ImageButton>
          <S.StyledImage
            source={
              !imageSelected
                ? {
                    uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  }
                : {uri: imageSelected}
            }
          />
        </S.ImageButton>

        <Text onPress={() => openImagePicker()} style={{marginTop: 10}}>
          Alterar imagem
        </Text>
      </S.CenteredView>
      <S.IconWrapper>
        <Icon
          name="bar-chart"
          size={35}
          color="black"
          onPress={() => navigation.navigate('Statistics')}
        />
      </S.IconWrapper>
      <S.Section>
        <S.Label>Nome:</S.Label>
        <S.StyledTextInput placeholder="Nome" />
      </S.Section>
      <S.Section>
        <S.Label>Email:</S.Label>
        <S.StyledTextInput placeholder="Email" />
      </S.Section>
      <S.Section>
        <S.Label>Idade:</S.Label>
        <S.StyledTextInput placeholder="Idade" />
      </S.Section>
      <S.Section>
        <S.Label>País:</S.Label>
        <S.StyledTextInput placeholder="País" />
      </S.Section>
      <S.Section>
        <S.Label>Cidade:</S.Label>
        <S.StyledTextInput placeholder="Cidade" />
      </S.Section>
      <S.CenteredView>
        <S.AddButton disabled={true}>
          <S.AddButtonText>Salvar alterações</S.AddButtonText>
        </S.AddButton>
      </S.CenteredView>
    </S.Wrapper>
  );
}
