import React from "react";

import { Container, Title } from "./styles";

interface IButton {
    onPress: () => void;
}

export const AddContactButton = ({ onPress }: IButton) => {
    return (
        <Container activeOpacity={0.6} onPress={onPress}>
            <Title>Adicionar</Title>
        </Container>
    );
};
