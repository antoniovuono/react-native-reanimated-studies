import { AntDesign } from "@expo/vector-icons";
import React from "react";

import {
    Container,
    Divider,
    IconContent,
    Phone,
    UserDetails,
    UserName,
} from "./styles";

export interface IContactInfo {
    name: string;
    phone: string;
}

export const Contact = ({ name, phone }: IContactInfo) => {
    return (
        <Container>
            <IconContent>
                <AntDesign name="user" size={28} color="white" />
            </IconContent>
            <Divider />

            <UserDetails>
                <UserName>{name}</UserName>
                <Phone>{phone}</Phone>
            </UserDetails>
        </Container>
    );
};
