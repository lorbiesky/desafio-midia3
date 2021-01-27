import React from 'react';
import * as S from './styles';

import { Ionicons } from '@expo/vector-icons';

function HamburguerMenu({ onPress }) {
  return (
    <S.Container onPress={onPress}>
      <Ionicons name="menu-outline" size={40} style={{ color: '#999494' }} />
    </S.Container>
  );
}

export default HamburguerMenu;
