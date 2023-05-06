import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Alert,
    FlatList,
    LayoutAnimation,
    StatusBar,
    TouchableOpacity,
} from "react-native";

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
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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

        setName("");
        setPhone("");
        setIsFormAppear(false);
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
                        {!isFormAppear ? (
                            <AntDesign
                                name="pluscircle"
                                size={34}
                                color={"green"}
                            />
                        ) : (
                            <AntDesign
                                name="minuscircle"
                                size={34}
                                color={"red"}
                            />
                        )}
                    </TouchableOpacity>
                </HeaderContent>

                {!isFormAppear && (
                    <FormContent>
                        <Divider style={{ marginTop: 0 }} />
                    </FormContent>
                )}

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

                        <Divider />
                    </FormContent>
                )}

                <ListContent>
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
