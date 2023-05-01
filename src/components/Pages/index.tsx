import React from "react";
import { Dimensions } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

import { Container, Square } from "./styles";

interface PagesProps {
    title: string;
    index: number;
    translateX: Animated.SharedValue<number>;
}

const { height, width } = Dimensions.get("window");

export const Pages = ({ title, index, translateX }: PagesProps) => {
    const rStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0, 1, 0]
        );

        return {
            transform: [{ scale }],
        };
    });

    return (
        <Container style={{ backgroundColor: `rgba(0,0,256, 0.${index + 2})` }}>
            <Square style={rStyle} />
        </Container>
    );
};
