import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { StyleProp, TextStyle } from 'react-native';
import { colors } from '../colors';

// custom components
import { RegularText, SmallText } from '../Texts';

const StyledView = styled.View`
    flex-direction: column;
    flex: 1; 
    justify-content: center;
`

// types
interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = ({ mainText, subText, mainTextStyles, subTextStyles }) => {
  return (
    <StyledView>
        <RegularText 
            textStyles={[
                {
                    color: colors.secondary, 
                    fontSize: 22
                }, 
                mainTextStyles
            ]}
            >
                {mainText}
        </RegularText>
        <SmallText 
            textStyles={[
                {
                    color: colors.secondary, 
                    fontSize: 14
                }, 
                subTextStyles
            ]}
            >
                {subText}
        </SmallText>
    </StyledView>
  )
};
export default Greeting;