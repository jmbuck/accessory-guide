import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield';
  
import { formStyles } from './styles'
import { offBlack, accent, lightOffBlack, error } from '../colors'

export default class GenerateForm extends Component {

  constructor(props) {
    super(props) 

    this.state = {}
  }

  renderFormSection = (sectionHeader, defaultValue) => {
   let { errors = {} } = this.state
   const minRepsErrorKey = sectionHeader + 'MinReps'
   const numExercisesErrorKey = sectionHeader + 'NumExercises'
   return (
      <View>         
        <Text>{sectionHeader}</Text>  
        <TextField 
          label="Min Reps"
          textColor={offBlack}
          activeLineWidth={1}
          tintColor={accent}
          baseColor={lightOffBlack}
          errorColor={error}
          error={errors[minRepsErrorKey]}
          defaultValue={defaultValue.toString()}
          onChangeText={(text) => this.onChange(text, minRepsErrorKey, 'reps')}
        />

        <TextField 
          label="# of Exercises"
          textColor={offBlack}
          activeLineWidth={1}
          tintColor={accent}
          baseColor={lightOffBlack}
          errorColor={error}
          error={errors[numExercisesErrorKey]}
          defaultValue={defaultValue.toString()}
          onChangeText={(text) => this.onChange(text, numExercisesErrorKey, 'exercises')}
        />
      </View>
    )
  }

  onChange = (text, errorKey, type) => {
    // Check if text is a number
    let reg = /^\d+$/;
    if(reg.test(text)) {
      // Text is a number
      const num = parseInt(text, 10)
      if(type === 'reps') {
        // Min Reps
        if(num >= 10 && num <= 200) {
          // Number is in a valid range
          this.setState({ errors: { [errorKey]: null }})
        } else if(num < 10) {
          this.setState({ errors: { [errorKey]: 'Minimum reps should be 10 or more'}})
        } else {
          this.setState({ errors: { [errorKey]: 'Minimum reps should be 200 or fewer'}})
        }
      } else {
        // # of Exercises
        if(num >= 1 && num <= 5) {
          // Number is in a valid range
          this.setState({ errors: { [errorKey]: null }})
        } else if(num < 1) {
          this.setState({ errors: { [errorKey]: '# of exercises should be 1 or more'}})
        } else {
          this.setState({ errors: { [errorKey]: '# of exercies should be 5 or fewer'}})
        }
      }
    } else {
      //Text is not a number
      if(text.length > 0) {
        this.setState({ errors: { [errorKey]: 'Must be a number'}})
      } else {
        this.setState({ errors: { [errorKey]: 'Field cannot be empty'}})
      }   
    }
  }

  render() {
    return (
      <>
        {this.renderFormSection('Pull', 50)}
        {this.renderFormSection('Push', 50)}
        {this.renderFormSection('Legs', 30)}
        {this.renderFormSection('Core', 30)}
      </>
    );
  }
}