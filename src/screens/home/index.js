import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import TopHeader from '../../components/TopHeader'
import styles from "./styles";

class Home extends Component {
  render() {
    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <TopHeader {...this.props}/>
            <View style={{ marginBottom: 80 }}>
 
            </View>

        </Container>
    );
  }
}

export default Home;