import { AntDesign } from "@expo/vector-icons";
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
    withSpring,
    withTiming,
} from "react-native-reanimated";

import {
    Container,
    Divider,
    IconContent,
    Phone,
    UserDetails,
    UserName,
} from "./styles";

export interface IContactInfo {
    id?: string;
    name: string;
    phone: string;
}

const { width } = Dimensions.get("window");

const TRANSLATE_X_TRESHOLD = -width * 0.2;

export const Contact = ({ name, phone }: IContactInfo) => {
    const transalateX = useSharedValue(0);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
        {
            onActive: (event) => {
                if (transalateX.value < event.translationX) {
                    transalateX.value = withSpring(0);
                } else {
                    transalateX.value = event.translationX;
                }
            },
            onEnd: () => {
                if (transalateX.value > TRANSLATE_X_TRESHOLD) {
                    transalateX.value = withSpring(0);
                } else {
                    transalateX.value = withSpring(TRANSLATE_X_TRESHOLD);
                }
            },
        }
    );

    const rAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: transalateX.value,
                },
            ],
        };
    });
    return (
        <PanGestureHandler onGestureEvent={panGesture}>
            <Container style={rAnimatedStyle}>
                <IconContent>
                    <AntDesign name="user" size={28} color="white" />
                </IconContent>
                <Divider />

                <UserDetails>
                    <UserName>{name}</UserName>
                    <Phone>{phone}</Phone>
                </UserDetails>
            </Container>
        </PanGestureHandler>
    );
};
