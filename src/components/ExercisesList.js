import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { exerciseListStyles } from './styles'

export default class ExercisesList extends Component {
  render() {
    return (
      <Text style={exerciseListStyles.listHeader}>{this.props.listHeader} Exercises</Text>
    );
  }
}