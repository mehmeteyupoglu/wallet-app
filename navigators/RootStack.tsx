import React, { FunctionComponent } from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import { Welcome, Home } from "../screens"
import { colors } from "../components";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0, 
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        elevation: 0,
                    }, 
                    headerTintColor: colors.secondary,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;