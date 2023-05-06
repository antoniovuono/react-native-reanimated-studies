import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isFormAppear, setIsFormAppear] = useState(false);

    const handleOpenContactForm = () => {
        setIsFormAppear((state) => !state);
    };

    const handleAddContact = () => {
        if (!name) {
            Alert.alert("Contato", "O nome é obrigatório");
        }

        if (!phone) {
            Alert.alert("Contato", "O telefone é obrigatório");
        }

        const newContact = {
            id: String(new Date().getTime()),
            name,
            phone,
        };

        setContacts([...contacts, newContact]);
    };

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

                    <TouchableOpacity onPress={handleOpenContactForm}>
                        <AntDesign
                            name="pluscircle"
                            size={34}
                            color={isFormAppear ? "gray" : "green"}
                        />
                    </TouchableOpacity>
                </HeaderContent>

                {isFormAppear && (
                    <FormContent>
                        <InputText
                            placeholder="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                        <InputText
                            placeholder="Telefone"
                            value={phone}
                            onChangeText={setPhone}
                        />

                        <AddContactButton onPress={handleAddContact} />
                    </FormContent>
                )}

                <ListContent>
                    <Divider />

                    <FlatList
                        data={contacts}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <Contact
                                key={item.id}
                                name={item.name}
                                phone={item.phone}
                            />
                        )}
                    />
                </ListContent>
            </Container>
        </>
    );
};
