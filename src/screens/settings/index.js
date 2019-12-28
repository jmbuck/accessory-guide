import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container, Text } from "native-base";


class Settings extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Text>Home</Text>
      </Container>
    );
  }
}

export default Settings;