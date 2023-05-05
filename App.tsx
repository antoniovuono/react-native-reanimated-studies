import React from "react";

import "react-native-gesture-handler";
import { ExerciseList } from "./src/Screens/ExerciseList";
import { ExerciseOne } from "./src/Screens/ExerciseOne";
import { InterpolateScrollView } from "./src/Screens/InterpolateScrollView";
import { Primary } from "./src/Screens/Primary";
import { Secondary } from "./src/Screens/Secondary";
import { SwipeToDelete } from "./src/Screens/SwipeToDelete";
import { AppRoutes } from "./src/routes";

export default function App() {
    return <ExerciseList />;
}
