import React from 'react';

import { formatPrice } from '../../../utils/format';
import BackButton from '../../../components/BackButton';

import * as S from './styles';

function Purchases({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  };

  const data = [
    { id: 1, name: 'Caderno', price: 15.99 },
    { id: 2, name: 'Livro', price: 32 },
    { id: 3, name: 'Caneta', price: 1.5 },
    { id: 4, name: 'Borracha', price: 0.5 },
  ];

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => handleBack()} />
      </S.Header>

      <S.Body>
        <S.Main>
          {data &&
            data.map((item) => {
              return (
                <S.PurchaseCard key={item.id}>
                  <S.PurchaseName>
                    <S.PurchaseText>{item.name}</S.PurchaseText>
                  </S.PurchaseName>

                  <S.PurchasePrice>
                    <S.PriceText>{formatPrice(item.price)}</S.PriceText>
                  </S.PurchasePrice>
                </S.PurchaseCard>
              );
            })}
        </S.Main>
      </S.Body>
    </S.Container>
  );
}

export default Purchases;
