import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs({
    placeholderTextColor: "#FFFFFF",
})`
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid white;
    padding-left: 20px;
    color: white;
    margin-bottom: 20px;
`;
