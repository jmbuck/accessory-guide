import React, { Component } from "react";
import { Container, Card, Content, CardItem, Body, Text, Form, Label, Input, Item } from "native-base";

import TopHeader from '../../components/TopHeader'
import GenerateForm from '../../components/GenerateForm'
import styles from "./styles";

class Home extends Component {
  render() {
    return (
      <>
        <TopHeader {...this.props}/>   
        <Container style={styles.body}>      
          <Content>
            <Card style={styles.dateCard}>
              <CardItem style={styles.dateCardItem}>
                <Body>
                  <Text style={styles.text}>
                    DATE
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.generateCard}>
              <CardItem header bordered style={styles.generateCardHeader}>
                <Body>
                  <Text style={styles.text}>
                    Generate A Workout
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered style={styles.generateCardForm}>
                <Content>
                  <GenerateForm /> 
                </Content>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </>
    );
  }
}

export default Home;