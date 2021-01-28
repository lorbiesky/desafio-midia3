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
          <S.TextBoxTitle>Criador</S.TextBoxTitle>

          <S.TextBoxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            rhoncus erat nec neque iaculis mollis. Donec leo purus, consequat
            sed turpis id, posuere imperdiet turpis.
          </S.TextBoxContent>
        </S.TextBlockContainer>

        <S.TextBlockContainer>
          <S.TextBoxTitle>Projeto</S.TextBoxTitle>

          <S.TextBoxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            rhoncus erat nec neque iaculis mollis. Donec leo purus, consequat
            sed turpis id, posuere imperdiet turpis.
          </S.TextBoxContent>
        </S.TextBlockContainer>

        <S.TextBlockContainer>
          <S.TextBoxTitle>Agradecimentos</S.TextBoxTitle>

          <S.TextBoxContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            rhoncus erat nec neque iaculis mollis. Donec leo purus, consequat
            sed turpis id, posuere imperdiet turpis.
          </S.TextBoxContent>
        </S.TextBlockContainer>
      </S.Body>
    </S.Container>
  );
}

export default About;
