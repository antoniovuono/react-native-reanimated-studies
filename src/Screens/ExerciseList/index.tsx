import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";

import { Contact } from "./components/Contact";
import {
    Container,
    Divider,
    HeaderContent,
    ListContent,
    Title,
} from "./styles";

export const ExerciseList = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Container>
                <HeaderContent>
                    <Title>Contatos</Title>
                    <AntDesign name="pluscircle" size={34} color="green" />
                </HeaderContent>
                <ListContent>
                    <Divider />

                    <Contact />
                    <Contact />
                    <Contact />
                </ListContent>
            </Container>
        </>
    );
};
