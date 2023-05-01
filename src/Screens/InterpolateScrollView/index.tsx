import React from "react";
import {
    useAnimatedScrollHandler,
    useSharedValue,
} from "react-native-reanimated";

import { Container } from "./styles";
import { Pages } from "../../components/Pages";

const WORDS = ["What's", "up", "mobile", "dev"];

export const InterpolateScrollView = () => {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    });

    return (
        <Container onScroll={scrollHandler} scrollEventThrottle={16} horizontal>
            {WORDS.map((title, index) => {
                return (
                    <Pages
                        key={index.toString()}
                        title={title}
                        index={index}
                        translateX={translateX}
                    />
                );
            })}
        </Container>
    );
};
