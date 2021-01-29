import React, { useState, useEffect } from 'react';

import LottieView from 'lottie-react-native';
import LoadAnim from '../../../assets/Animations/loading.json';

import TopMenu from '../../../components/TopMenu';
import HorizontalList from '../../../components/HorizontalList';
import SideView from '../../../components/SideView';
import { ScrollView } from 'react-native';

import * as S from './styles';

function Home({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const handleProfile = () => {
    navigation.navigate('Register');
  };

  const handlePurchases = () => {
    navigation.navigate('Purchases');
  };

  const handleAbout = () => {
    navigation.navigate('About');
  };

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
  });

  const data = [
    { id: 1, content: {} },
    { id: 2, content: {} },
    { id: 3, content: {} },
  ];

  if (loading) {
    return (
      <S.LoadContainer>
        <LottieView
          style={{ width: 200, height: 200 }}
          source={LoadAnim}
          autoPlay
          loop
        />
      </S.LoadContainer>
    );
  }

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
