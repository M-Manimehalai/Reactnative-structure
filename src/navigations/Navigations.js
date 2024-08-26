import React, { useState, useRef, useEffect } from 'react';
import { ToastAndroid, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Sample from '../containers/sample/Sample';
import CommonColors from '../utils/constants/colors/CommonColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dashboard from '../containers/dashboard/Dashboard';
import Dashboardnew from '../containers/dashboardnew/Dashboardnew';
import Testing from '../containers/sample/Testing';

const Stack = createStackNavigator();

function Navigation(props) {
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="Dashboard"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: CommonColors.primary
                    },
                    headerTintColor: CommonColors.white,
                    headerTitleStyle: {
                        fontSize: 19,
                        color: CommonColors.white,
                        fontWeight: 'bold'
                    },
                }}
            >
                 <Stack.Screen
                    options={{ headerShown: false }}
                    name="Dashboardnew"
                    component={Dashboardnew}
                />
                {/* <Stack.Screen
                    options={{ headerShown: false }}
                    name="Dashboard"
                    component={Dashboard}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Sample"
                    component={Sample}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Testing"
                    component={Testing}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;