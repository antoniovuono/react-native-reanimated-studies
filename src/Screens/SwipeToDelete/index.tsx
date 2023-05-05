import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { Container, ListScroll, Title } from "./styles";
import { Task } from "../../components/Task";

const TITLES = [
    "Watch the latest video from animations.",
    "Subscribe the channel",
    "Join the community",
    "Wash your hands",
    "Check youtube comments",
];

export interface TaskInterface {
    title: string;
    index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

export const SwipeToDelete = () => {
    const [tasks, setTasks] = useState(TASKS);
    return (
        <Container>
            <Title>Task</Title>

            <ListScroll>
                {tasks.map((task) => (
                    <Task task={task} key={task.index} />
                ))}
            </ListScroll>
        </Container>
    );
};
