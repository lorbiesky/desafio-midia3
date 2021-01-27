import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

function BackButton({ onPress }) {
  return (
    <S.Container onPress={() => onPress()}>
      <Ionicons
        name="arrow-back-outline"
        size={40}
        style={{ color: 'white' }}
      />
    </S.Container>
  );
}

export default BackButton;
