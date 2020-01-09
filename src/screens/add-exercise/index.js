import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-material-ui'

import TopHeader from '../../components/TopHeader'
import styles from './styles'

class AddExercise extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <TopHeader {...this.props}/>   
          <View><Text>Add Exercise</Text></View>
        </ScrollView>
      </>
    );
  }
}

export default AddExercise;