import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import { ListItem } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { exerciseListStyles } from './styles'
import { offBlack } from '../colors'
import Divider from './Divider'

export default class ExercisesList extends Component {

  deleteExercise = (exercise) => {

  }

  openExercise = (exercise) => {

  }

  renderAlert = (exercise) => {
    Alert.alert(
      'Are you sure?',
      'If you delete this exercise, all sets associated with it will be lost.',
      [
        { text: 'Delete', onPress: () => this.deleteExercise(/*TODO: pass in exercise*/)},
        { text: 'Cancel' },
      ],
    )
  }

  renderBodyweightExercise = () => {
    return (
      <ListItem
        leftElement='accessibility'
        centerElement={
          <View style={exerciseListStyles.listItem}>
            <Text style={exerciseListStyles.exerciseName}>Pull-up</Text>
            <View style={exerciseListStyles.exerciseInfo}>
              <Text style={exerciseListStyles.exerciseInfoText}>Max Reps:</Text>
              <Text style={exerciseListStyles.exerciseInfoText}>Total: </Text>
            </View>
          </View>
        }
        rightElement='delete'
        onPress={() => this.openExercise(/*TODO: pass in exercise*/)}
        onRightElementPress={() => this.renderAlert(/*TODO: pass in exercise*/)}
      />
    )
  }

  renderWeightedExercise = () => {
    return (
      <ListItem
        leftElement={<Icon name="dumbbell" size={24} color={offBlack}/>}
        centerElement={
          <View style={exerciseListStyles.listItem}>
            <Text style={exerciseListStyles.exerciseName}>Pull-up</Text>
            <View style={exerciseListStyles.exerciseInfo}>
              <Text style={exerciseListStyles.exerciseInfoText}>Max Reps:</Text>
              <Text style={exerciseListStyles.exerciseInfoText}>Total: </Text>
            </View>
          </View>
        }
        rightElement='delete'
        onPress={() => this.openExercise(/*TODO: pass in exercise*/)}
        onRightElementPress={() => this.renderAlert(/*TODO: pass in exercise*/)}
      />
    )
  }

  render = () => {
    return (
      <>
        <Text style={exerciseListStyles.listHeader}>{this.props.listHeader} Exercises</Text>
        <Divider thick/>
        {this.renderBodyweightExercise()}
        <Divider />
        {this.renderWeightedExercise()}
      </>
    );
  }
}