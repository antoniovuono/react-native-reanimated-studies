import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Box = styled(Animated.View)`
    width: 100px;
    height: 100px;
    background-color: blue;
`;
