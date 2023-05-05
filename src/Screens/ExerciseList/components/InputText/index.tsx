import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface ITextInput extends TextInputProps {
    placeholder: string;
}

export const InputText = ({ placeholder, ...rest }: ITextInput) => {
    return (
        <Container
            {...rest}
            placeholder={placeholder}
            maxLength={50}
            autoCapitalize="none"
        />
    );
};
