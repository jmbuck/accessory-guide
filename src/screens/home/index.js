import React, { Component } from "react";
import { View, Text } from 'react-native'
import { Card, Icon } from 'react-native-material-ui'
import moment from 'moment'

import TopHeader from '../../components/TopHeader'
import GenerateForm from '../../components/GenerateForm'
import styles from "./styles";

class Home extends Component {
  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', dateStyle: 'full' };
    return (
      <>
        <TopHeader {...this.props}/>   
        <View style={styles.body}> 
          <Card>
            <View style={styles.dateCard}>
              <Icon name="chevron-left" size={42} style={styles.icon}/>
              <Text style={styles.dateText}>{moment(new Date()).format('LL')}</Text>
              <Icon name="chevron-right" size={42} style={styles.icon}/>
            </View>
          </Card>     
        </View>
      </>
    );
  }
}

export default Home;