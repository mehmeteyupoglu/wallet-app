import React, { FunctionComponent } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px; 
    width: 45px; 
    border-radius: 15px;
`

const StyledImage = styled.Image`
    resize-mode: cover;
    height: 100%;
    width: 100%;
    border-radius: 15px;
`

// types
interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = ({ img, imgStyle, imgContainerStyle, onPress }) => {
  return (
    <StyledView onPress={onPress} style={imgContainerStyle}>
        <StyledImage source={img} style={imgStyle} />
    </StyledView>
  )
};

export default Profile;