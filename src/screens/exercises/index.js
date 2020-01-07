import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Icon } from 'react-native-material-ui'

import TopHeader from '../../components/TopHeader'
import styles from './styles'

class Exercises extends Component {
  render() {
    return (
      <ScrollView>
        <TopHeader {...this.props}/>   
        <View style={styles.body}> 
        
        </View>
      </ScrollView>
    );
  }
}

export default Exercises;