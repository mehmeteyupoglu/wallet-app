import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { TextProps } from './types';

const StyledText = styled.Text`
    font-size: 15px; 
    color: ${colors.white};
    text-align: left;
    font-family: 'Lato-Bold';
`

const RegularText: FunctionComponent<TextProps> = ({textStyles, children}) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};
export default RegularText;