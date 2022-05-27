import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { RegularText } from '../Texts';
import {
    GestureResponderEvent, 
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native"

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`

// types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = ({onPress, btnStyles, textStyles, children}) => {
  return (
    <ButtonView onPress={onPress} style={btnStyles}>
        <RegularText textStyles={textStyles}>{children}</RegularText>
    </ButtonView>
  )
};
export default RegularButton;