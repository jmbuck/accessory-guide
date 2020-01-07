/**
 * @format
 * @flow
 */

import React from "react";
import { Root } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
 

import Home from "./screens/home/";
import Exercises from "./screens/exercises/";
import Settings from "./screens/settings/";

import { mainStyles } from './styles'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Exercises: { screen: Exercises },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    cardStyle: mainStyles.body,
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer/>
  </Root>;