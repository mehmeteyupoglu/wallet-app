import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

// custom components
import { Container, colors } from "../components";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar barStyle="light-content" />
        </HomeContainer>
    )
}

export default Home;