import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    height: 350px;
    width: 350px;
    border-radius: 175px;
    align-items: center;
    justify-content: center;
    border-width: 5px;
    border-color: blue;
`;

export const Box = styled(Animated.View)`
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 20px;
`;
