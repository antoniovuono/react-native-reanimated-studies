import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";

import { Container, Logotipo } from "./styles";

export const ExerciseOne = () => {
    const scale = useSharedValue(0);
    const opacity = useSharedValue(1);

    const reanimatedStyled = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                {
                    scale: scale.value,
                },
            ],
        };
    });

    useEffect(() => {
        scale.value = withTiming(1, { duration: 2500 });
        opacity.value = withTiming(0, { duration: 4000 });
    }, []);

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Container>
                <Logotipo style={reanimatedStyled}>ASVStudio</Logotipo>
            </Container>
        </>
    );
};
