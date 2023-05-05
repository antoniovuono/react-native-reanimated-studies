import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const LIST_ITEM_HEIGTH = 70;

export const Container = styled(Animated.View)`
    align-items: center;
    width: 100%;
`;

export const TaskContent = styled(Animated.View)`
    width: 90%;
    background-color: white;
    height: ${LIST_ITEM_HEIGTH}px;
    justify-content: center;
    padding-left: 20px;
    shadow-opacity: 0.14;
    shadow-radius: 10px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
`;

export const DeleteButton = styled(Animated.View)`
    width: ${LIST_ITEM_HEIGTH}px;
    height: ${LIST_ITEM_HEIGTH}px;
    position: absolute;
    right: 10%;
    justify-content: center;
    align-items: center;
`;
