import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors, Container, BigText, SmallText } from "../components";
// image 
import background from "../assets/bgs/background_v1.png";
import { RegularButton } from "../components/Buttons";

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
    justify-content: flex-end;
`

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent'/>
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{width: "70%", marginBottom: 25}}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{width: "70%", marginBottom: 25}}>
                        Best payment method, connects your money to your friends, family.
                    </SmallText>
                    <RegularButton onPress={() => {console.log('onPressed')}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;