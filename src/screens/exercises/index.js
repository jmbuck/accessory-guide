import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Card, IconToggle, ActionButton } from 'react-native-material-ui'

import TopHeader from '../../components/TopHeader'
import ExercisesList from '../../components/ExercisesList'
import styles from './styles'
import { offWhite } from '../../colors'

class Exercises extends Component {
  renderListCard(listHeader) {
    return (
      <Card>
        <View style={styles.listCard}>
          <ExercisesList listHeader={listHeader} />
        </View>
      </Card>    
    )
  }

  render() {
    return (
      <>
        <ScrollView>
          <TopHeader {...this.props}/>   
          <View style={styles.body}> 
            {this.renderListCard('Pull')}
            {this.renderListCard('Push')}
            {this.renderListCard('Legs')}
            {this.renderListCard('Core')}
          </View>
        </ScrollView>
        <ActionButton onPress={() => this.props.navigation.navigate('AddExercise')}/>
      </>
    );
  }
}

export default Exercises;