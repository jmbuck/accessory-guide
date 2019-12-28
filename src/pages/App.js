/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import { Drawer, Container, Header, Left, Body, Right, Button, Icon, Title  } from 'native-base';
import SideBar from '../components/SideBar';

class App extends Component {

  closeDrawer = () => {
    this.drawer._root.close()
  }

  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    return (
      <>
        <Container>
          <Header>
            <Left>
              <Button transparent>
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

export default App;
