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
import Settings from "./screens/settings/";
import SideBar from "./components/SideBar";

import { mainStyles } from './styles'
import { primary } from './colors'

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },


  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer style={mainStyles.body}/>
  </Root>;