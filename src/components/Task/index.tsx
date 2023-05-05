import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import {
    Container,
    DeleteButton,
    LIST_ITEM_HEIGTH,
    TaskContent,
    Title,
} from "./styles";
import { TaskInterface } from "../../Screens/SwipeToDelete";

interface TaskProps {
    task: TaskInterface;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_X_TRESHOLD = -SCREEN_WIDTH * 0.3;

export const Task = ({ task }: TaskProps) => {
    const translateX = useSharedValue(0);
    const heightTaskComponent = useSharedValue(LIST_ITEM_HEIGTH);
    const marginVertical = useSharedValue(8);
    const opacity = useSharedValue(1);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
        {
            onActive: (event) => {
                translateX.value = event.translationX;
            },
            onEnd: () => {
                const shouldBeDismissed =
                    translateX.value < TRANSLATE_X_TRESHOLD;

                if (shouldBeDismissed) {
                    translateX.value = withTiming(-SCREEN_WIDTH);
                    heightTaskComponent.value = withTiming(0);
                    marginVertical.value = withTiming(0);
                    opacity.value = withTiming(0);
                } else {
                    translateX.value = withTiming(0);
                }
            },
        }
    );

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const rDeleteButtonStyle = useAnimatedStyle(() => {
        const opacity = withTiming(
            translateX.value < TRANSLATE_X_TRESHOLD ? 1 : 0
        );
        return {
            opacity,
        };
    });

    const rTaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: heightTaskComponent.value,
            marginVertical: marginVertical.value,
            opacity: opacity.value,
        };
    });

    return (
        <Container style={rTaskContainerStyle}>
            <DeleteButton style={rDeleteButtonStyle}>
                <FontAwesome5
                    name="trash-alt"
                    size={LIST_ITEM_HEIGTH * 0.4}
                    color="red"
                />
            </DeleteButton>

            <PanGestureHandler onGestureEvent={panGesture}>
                <TaskContent style={rStyle}>
                    <Title>{task.title}</Title>
                </TaskContent>
            </PanGestureHandler>
        </Container>
    );
};
