import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
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

import {
    Container,
    DeleteButton,
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
    onDelete: () => void;
}

const { width } = Dimensions.get("window");

const TRANSLATE_X_TRESHOLD = -width * 0.15;

export const Contact = ({ name, phone, onDelete }: IContactInfo) => {
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
        <>
            <DeleteButton>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons name="delete" size={38} color="red" />
                </TouchableOpacity>
            </DeleteButton>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Container style={rAnimatedStyle}>
                    <IconContent>
                        <Foundation name="telephone" size={34} color="green" />
                    </IconContent>
                    <Divider />

                    <UserDetails>
                        <UserName>{name}</UserName>
                        <Phone>{phone}</Phone>
                    </UserDetails>
                </Container>
            </PanGestureHandler>
        </>
    );
};
