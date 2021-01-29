import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: #312a2a;
`;

export const Header = styled.View`
  flex: 0.3;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 1.7;
  padding: 0 20px;
  align-items: center;
`;

export const Main = styled.ScrollView`
  width: 100%;
`;

export const PurchaseCard = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  margin: 5px 0px;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

export const PurchaseName = styled.View`
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #312a2a;
`;

export const PurchasePrice = styled.View`
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #312a2a;
`;

export const PurchaseText = styled.Text`
  color: #312a2a;
  font-size: 20px;
`;

export const PriceText = styled.Text`
  color: #ff5555;
  font-size: 20px;
  font-weight: bold;
`;
