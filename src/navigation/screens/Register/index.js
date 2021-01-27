import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../../components/BackButton';

import * as S from './styles';

function Register({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>

      <S.Body>
        <S.BodyTextContainer>
          <S.BodyText>Digite suas informações...</S.BodyText>
        </S.BodyTextContainer>

        <S.BodyInputContainer>
          <S.BodyInput placeholder="Nome" />
          <S.BodyInput placeholder="E-mail" />
          <S.BodyInput placeholder="Senha" secureTextEntry={true} />
          <S.BodyInput
            placeholder="Confirmação de senha"
            secureTextEntry={true}
          />
        </S.BodyInputContainer>
      </S.Body>

      <S.Footer>
        <S.SubmitButton activeOpacity={0.6}>
          <Ionicons
            name="checkmark-outline"
            size={60}
            style={{ color: '#312a2a' }}
          />
        </S.SubmitButton>
      </S.Footer>
    </S.Container>
  );
}

export default Register;
