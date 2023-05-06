import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 1px solid white;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const IconContent = styled.View`
    justify-content: center;
    align-items: center;
    width: 20%;
    flex-direction: row;
`;

export const Divider = styled.View`
    width: 1px;
    height: 70%;
    background-color: gray;
`;

export const UserDetails = styled.View`
    width: 80%;
    margin-left: 20px;
`;

export const UserName = styled.Text`
    color: white;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Phone = styled.Text`
    color: white;
    font-size: 19px;
    font-weight: 400;
`;
