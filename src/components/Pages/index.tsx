import React from "react";
import { Dimensions } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

import { Container, Square, TextContent, Title } from "./styles";

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

    const rTextStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            translateX.value,
            inputRange,
            [height / 2, 0, -height / 2],
            Extrapolate.CLAMP
        );

        const opacity = interpolate(
            translateX.value,
            inputRange,
            [-2, 1, -2],
            Extrapolate.CLAMP
        );

        return {
            opacity,
            transform: [
                {
                    translateY,
                },
            ],
        };
    });

    return (
        <Container style={{ backgroundColor: `rgba(0,0,256, 0.${index + 2})` }}>
            <Square style={rStyle} />

            <TextContent style={rTextStyle}>
                <Title>{title}</Title>
            </TextContent>
        </Container>
    );
};
