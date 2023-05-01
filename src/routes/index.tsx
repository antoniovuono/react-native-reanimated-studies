import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AppStacks } from "./stack.routes";

export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <AppStacks />
        </NavigationContainer>
    );
};
