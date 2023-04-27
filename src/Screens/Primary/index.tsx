import React, { useEffect } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";

import { Box, Container } from "./styles";

export const Primary = () => {
    const progress = useSharedValue(1);
    const scale = useSharedValue(2);

    const handleRotation = (progress: Animated.SharedValue<number>) => {
        "worklet";
        return `${(progress.value * 2 * Math.PI) / 2}rad`;
    };

    const reanimatedStyled = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            borderRadius: (progress.value * 100.0) / 2,
            transform: [
                { scale: scale.value },
                {
                    rotate: handleRotation(progress),
                },
            ],
        };
    }, []);

    useEffect(() => {
        progress.value = withRepeat(withSpring(0.2), 3, true);
        scale.value = withRepeat(withSpring(1), 3, true);
    }, []);

    return (
        <Container>
            <Box style={reanimatedStyled} />
        </Container>
    );
};
