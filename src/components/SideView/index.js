import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import * as S from './styles';

function SideView({ closeMenu, nav, name }) {
  return (
    <S.Container>
      <S.Profile>
        <S.ProfileBackground>
          <Ionicons
            name="person-outline"
            size={100}
            style={{ color: '#312a2a' }}
          />
        </S.ProfileBackground>

        <S.ProfileText>{name || 'Anônimo'}</S.ProfileText>
      </S.Profile>

      <S.MenuItems>
        {nav &&
          nav.map((item, index) => {
            return (
              <S.ItemContainer key={index} onPress={() => item.onPress()}>
                <Ionicons
                  name={item.icon}
                  size={25}
                  style={{ color: 'white' }}
                />
                <S.ItemTitle>{item.title}</S.ItemTitle>
              </S.ItemContainer>
            );
          })}
      </S.MenuItems>

      <S.ExitMenuButton onPress={() => closeMenu(false)}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          style={{ color: '#312a2a' }}
        />
      </S.ExitMenuButton>
    </S.Container>
  );
}

export default SideView;
