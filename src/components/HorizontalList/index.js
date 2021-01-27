import React from 'react';
import { ScrollView } from 'react-native';

import * as S from './styles';

function HorizontalList({ title, items }) {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{title || ''}</S.Title>
      </S.TitleContainer>

      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {items &&
          items.map((card) => {
            return (
              <S.Card key={card.id}>
                <S.CardTop />

                <S.CardBottom />
              </S.Card>
            );
          })}
      </ScrollView>
    </S.Container>
  );
}

export default HorizontalList;
