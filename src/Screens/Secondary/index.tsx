import React from "react";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import { Box, Circle, Container } from "./styles";

type ContextType = {
    translateX: number;
    translateY: number;
};

export const Secondary = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    // Usamos o hook para controlar o pangestureEvent
    const panGestureEvent = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        ContextType
    >({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;
        },
        onEnd: () => {
            const distance = Math.sqrt(
                translateX.value ** 2 + translateY.value ** 2
            );

            if (distance < 200.0 + 100 / 2) {
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        },
    });

    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    return (
        <Container>
            <Circle>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Box style={reanimatedStyle} />
                </PanGestureHandler>
            </Circle>
        </Container>
    );
};
