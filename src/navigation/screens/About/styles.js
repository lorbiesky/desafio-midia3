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
  align-items: center;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProfileBackground = styled.View`
  margin: 10px;
  width: 150px;
  height: 150px;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  background-color: white;
`;

export const ProfileTextContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const ProfileText = styled.Text`
  color: white;
  margin: 10px;
  font-size: 16px;
`;

export const ProfileTitle = styled.Text`
  color: white;
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const TextBlockContainer = styled.View`
  width: 85%;
  margin: 10px;
  align-items: flex-start;
  justify-content: center;
`;

export const TextBoxTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const TextBoxContent = styled.Text`
  color: white;
  margin: 5px 0px;
  font-size: 16px;
`;
