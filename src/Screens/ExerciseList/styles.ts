import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: black;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: 700;
    color: white;
    padding-left: 20px;
`;

export const ListContent = styled.View`
    padding: 20px;
`;

export const Divider = styled.View`
    height: 1px;
    width: 100%;
    background-color: gray;
    margin-bottom: 20px;
`;
