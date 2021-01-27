import React from 'react';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons';

function SearchButton() {
  return (
    <S.Container>
      <Ionicons name="search-outline" size={40} style={{ color: '#999494' }} />
    </S.Container>
  );
}

export default SearchButton;
