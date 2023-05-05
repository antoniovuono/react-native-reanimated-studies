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

export const Contact = () => {
    return (
        <Container>
            <IconContent>
                <AntDesign name="user" size={34} color="white" />
            </IconContent>
            <Divider />

            <UserDetails>
                <UserName>Antonio Vuono</UserName>
                <Phone>(11) 941663638</Phone>
            </UserDetails>
        </Container>
    );
};
