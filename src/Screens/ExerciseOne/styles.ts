import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
    align-items: center;
`;

export const Logotipo = styled(Animated.Text)`
    color: white;
    font-size: 48px;
    font-weight: bold;
`;
