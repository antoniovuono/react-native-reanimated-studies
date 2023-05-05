import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "react-native";

import { AddContactButton } from "./components/AddContactButton";
import { Contact, IContactInfo } from "./components/Contact";
import { InputText } from "./components/InputText";
import {
    Container,
    Divider,
    FormContent,
    HeaderContent,
    ListContent,
    Title,
} from "./styles";

export const ExerciseList = () => {
    const [contacts, setContacts] = useState<IContactInfo[]>([]);

    const handleOpenContactForm = () => {};

    const handleAddContact = () => {};

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
                <FormContent>
                    <InputText placeholder="Nome" />
                    <InputText placeholder="Telefone" />

                    <AddContactButton />
                </FormContent>
                <ListContent>
                    <Divider />

                    {contacts.map((index) => (
                        <Contact name="Antonio Vuono" phone="(11) 941663638" />
                    ))}
                </ListContent>
            </Container>
        </>
    );
};
