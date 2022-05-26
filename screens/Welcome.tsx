import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors, Container } from "../components";
// image 
import background from "../assets/bgs/background_v1.png";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    flex: 1;
    width: 100%;
    max-height: 55%; 
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`

const BottomSection = styled.View`
    flex: 1;
    width: 100%;
    padding: 25px;
`

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;