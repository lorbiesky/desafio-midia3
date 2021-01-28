import React, { useState } from 'react';

import TopMenu from '../../../components/TopMenu';
import HorizontalList from '../../../components/HorizontalList';
import SideView from '../../../components/SideView';
import { ScrollView } from 'react-native';

import * as S from './styles';

function Home({ navigation }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleProfile = () => {
    navigation.navigate('Register');
  };

  const handlePurchases = () => {};

  const handleAbout = () => {
    navigation.navigate('About');
  };

  const data = [
    { id: 1, content: {} },
    { id: 2, content: {} },
    { id: 3, content: {} },
  ];

  return (
    <S.Container>
      {openMenu && (
        <SideView
          closeMenu={setOpenMenu}
          nav={[
            {
              title: 'Meu Perfil',
              icon: 'person-circle-outline',
              onPress: handleProfile,
            },
            {
              title: 'Meus Pedidos',
              icon: 'cart-outline',
              onPress: handlePurchases,
            },
            {
              title: 'Sobre',
              icon: 'alert-circle-outline',
              onPress: handleAbout,
            },
          ]}
        />
      )}

      <TopMenu menuPress={setOpenMenu} />

      <S.Body>
        <ScrollView>
          <HorizontalList title="Novidades" items={data} />

          <HorizontalList title="Lista" items={data} />
        </ScrollView>
      </S.Body>
    </S.Container>
  );
}

export default Home;
