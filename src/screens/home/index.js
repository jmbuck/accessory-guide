import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

class Home extends Component {
  render() {
    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <View style={{ marginBottom: 80 }}>
                <Button
                style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
                onPress={() => this.props.navigation.openDrawer()}
                >
                <Text>Open Drawer</Text>
                </Button>
            </View>

        </Container>
    );
  }
}

export default Home;