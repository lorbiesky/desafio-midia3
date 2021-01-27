import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 3;
  width: 100%;
  height: 100%;
  background-color: #312a2a;
`;

export const Header = styled.View`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.View`
  flex: 2;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const BodyInput = styled.TextInput`
  width: 350px;
  height: 50px;
  margin: 10px 0px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: white;
`;

export const BodyInputContainer = styled.View`
  width: 100%;
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
`;

export const BodyText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const BodyTextContainer = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
