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
    <AppContainer />
  </Root>;

/*import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import { Drawer, Container, Header, Left, Body, Right, Button, Icon, Title  } from 'native-base';
import SideBar from './components/SideBar';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      drawerOpen: false,
    }
  }

  toggleDrawer = () => {
    if(this.state.drawerOpen) {
      this.closeDrawer()
    } else {
      this.openDrawer()
    }
  }

  closeDrawer = () => {
    this.drawer._root.close()
    this.setState({ drawerOpen: false })
  }

  openDrawer = () => {
    this.drawer._root.open()
    this.setState({ drawerOpen: true })
  }

  render() {
    return (
      <>
        <Container>
          <Header>
            <Left>
              <Button onPress={this.toggleDrawer} transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Accessory Guide</Title>
            </Body>
          </Header>
        </Container>
        <Drawer ref={(ref) => { this.drawer = ref }} content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()}> 
          <Text>Drawer</Text>
        </Drawer> 
        <ScrollView>

        </ScrollView>
      </>
    )
  }
}

export default App;*/
