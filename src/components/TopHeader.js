import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class TopHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Accessory Guide</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}