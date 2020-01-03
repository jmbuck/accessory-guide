import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { headerStyles } from './styles'
import { primary } from '../colors'

export default class TopHeader extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor={primary} style={headerStyles.background}>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                <Icon style={headerStyles.text} name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title style={headerStyles.text}>Accessory Guide</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}