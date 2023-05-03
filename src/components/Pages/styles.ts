import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.7;

export const Container = styled.View`
    flex: 1;
    height: ${height}px;
    width: ${width}px;

    justify-content: center;
    align-items: center;
`;

export const Square = styled(Animated.View)`
    width: ${SIZE}px;
    height: ${SIZE}px;
    background-color: blue;
`;

export const TextContent = styled(Animated.View)`
    position: absolute;
`;

export const Title = styled.Text`
    font-size: 70px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
`;
