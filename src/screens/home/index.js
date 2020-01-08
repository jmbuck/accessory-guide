import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, IconToggle, Icon } from 'react-native-material-ui'
import moment from 'moment'

import TopHeader from '../../components/TopHeader'
import GenerateForm from '../../components/GenerateForm'
import styles from './styles'

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <TopHeader home={true} {...this.props}/>   
        <View style={styles.body}> 
          <Card>
            <View style={styles.dateCard}>
              <IconToggle name="arrow-back" size={32} style={styles.icon}/>
              <View style={styles.dateTextContainer}>
                <Icon name="date-range" size={28} style={styles.icon}/>
                <Text style={styles.dateText}>{moment(new Date()).format('LL')}</Text>
              </View>
              <IconToggle name="arrow-forward" size={32} style={styles.icon}/>
            </View>
          </Card>     

          <Card>
            <View style={styles.generateCard}>
              <GenerateForm />
            </View>
          </Card>    
        </View>
      </ScrollView>
    );
  }
}

export default Home;