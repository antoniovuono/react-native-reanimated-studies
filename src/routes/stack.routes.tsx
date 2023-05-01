import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ExerciseOne } from "../Screens/ExerciseOne";
import { Primary } from "../Screens/Primary";
import { Secondary } from "../Screens/Secondary";

const { Navigator, Screen } = createStackNavigator();

export const AppStacks = () => {
    return (
        <Navigator
            initialRouteName="ExerciseOne"
            screenOptions={{ headerShown: false }}
        >
            <Screen name="ExerciseOne" component={ExerciseOne} />
            <Screen name="Primary" component={Primary} />
            <Screen name="Secondary" component={Secondary} />
        </Navigator>
    );
};
