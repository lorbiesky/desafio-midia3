import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';

import * as S from './styles';

function About({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>

      <S.Body>
        <S.ProfileContainer>
          <S.ProfileBackground>
            <Ionicons
              name="person-outline"
              size={100}
              style={{ color: '#312a2a' }}
            />
          </S.ProfileBackground>

          <S.ProfileTextContainer>
            <S.ProfileTitle>João Victor L. Dias</S.ProfileTitle>

            <S.ProfileText>Desenvolvedor Full Stack</S.ProfileText>

            <S.ProfileText>23 anos</S.ProfileText>
          </S.ProfileTextContainer>
        </S.ProfileContainer>

        <S.TextBlockContainer>
          <S.TextBoxTitle>Versão</S.TextBoxTitle>

          <S.TextBoxContent>1.0.0</S.TextBoxContent>
        </S.TextBlockContainer>

        <S.TextBlockContainer>
          <S.TextBoxTitle>Projeto</S.TextBoxTitle>

          <S.TextBoxContent>
            A aplicação deverá ser apenas para Android. Ao iniciar, abrir um
            loader. Após o loader, aproximadamente 5s, o App deverá apresentar
            um menu hamburguer: “Minha conta”, “Meus Pedidos” e “Sobre”.
          </S.TextBoxContent>
        </S.TextBlockContainer>

        <S.TextBlockContainer>
          <S.TextBoxTitle>Agradecimentos</S.TextBoxTitle>

          <S.TextBoxContent>
            Desde já agradeço a entrevista de emprego que me foi concedida. Foi
            um prazer poder estar participando e mostrando meus conhecimentos.
          </S.TextBoxContent>
        </S.TextBlockContainer>
      </S.Body>
    </S.Container>
  );
}

export default About;
