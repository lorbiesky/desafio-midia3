import styled from 'styled-components/native';

export const Container = styled.View`
  z-index: 3;
  width: 50%;
  height: 100%;
  padding: 20px 0px;
  position: absolute;
  align-items: center;
  background-color: #312a2a;
  justify-content: space-between;
`;

export const Profile = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProfileBackground = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ProfileText = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

export const ExitMenuButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const MenuItems = styled.View`
  width: 100%;
  height: 400px;
  padding: 30px 0px;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemTitle = styled.Text`
  color: white;
  margin: 0 10px;
  font-size: 16px;
`;
