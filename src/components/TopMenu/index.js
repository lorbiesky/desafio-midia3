import React from 'react';

import SearchButton from '../SearchButton';
import HamburguerMenu from '../HamburguerMenu';

import * as S from './styles';

function TopMenu({ menuPress }) {
  return (
    <S.Container>
      <HamburguerMenu onPress={() => menuPress(true)} />

      <SearchButton />
    </S.Container>
  );
}

export default TopMenu;
