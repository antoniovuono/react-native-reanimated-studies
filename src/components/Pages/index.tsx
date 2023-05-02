import React from "react";
import { Dimensions } from "react-native";
import Animated, {
    Extrapolate,
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
const SIZE = width * 0.7;

export const Pages = ({ title, index, translateX }: PagesProps) => {
    const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
    ];

    const rStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            translateX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const borderRadius = interpolate(translateX.value, inputRange, [
            0,
            SIZE / 2,
            0,
        ]);

        return {
            borderRadius,
            transform: [{ scale }],
        };
    });

    return (
        <Container style={{ backgroundColor: `rgba(0,0,256, 0.${index + 2})` }}>
            <Square style={rStyle} />
        </Container>
    );
};
