import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-material-ui'
  
import { formStyles } from './styles'
import { offBlack, accent, lightOffBlack, error } from '../colors'

export default class GenerateForm extends Component {

  constructor(props) {
    super(props) 

    this.state = { errors: {}, values: {}, isErrored: false }

  }

  isErrored = () => {
    const { errors } = this.state
    for(error in Object.values(errors)) {
      if(error) return true
    }
    return false
  }

  onChange = (text, errorKey, type) => {
    // Check if text is a number
    const { errors } = this.state
    let reg = /^\d+$/;

    if(reg.test(text)) {
      // Text is a number
      const num = parseInt(text, 10)
      if(type === 'reps') {
        // Min Reps
        if(num >= 10 && num <= 200) {
          // Number is in a valid range
          errors[errorKey] = null
        } else if(num < 10) {
          errors[errorKey] = 'Minimum reps should be 10 or more'
        } else {
          errors[errorKey] = 'Minimum reps should be 200 or fewer'
        }
      } else {
        // # of Exercises
        if(num >= 1 && num <= 5) {
          // Number is in a valid range
          errors[errorKey] = null 
        } else if(num < 1) {
          errors[errorKey] = '# of exercises should be 1 or more'
        } else {
          errors[errorKey] = '# of exercies should be 5 or fewer'
        }
      }
    } else {
      //Text is not a number
      if(text.length > 0) {
        errors[errorKey] = 'Must be a number'
      } else {
        errors[errorKey] = 'Field cannot be empty'
      }   
    }

    this.setState({ errors, isErrored: this.isErrored() })
  }
  
  handleSubmit = (ev) => {
    ['Pull', 'Push', 'Legs', 'Core']
    .forEach((name) => {
      let valueReps = this[name + 'MinRepsRef'].value();
      let valueExercises = this[name + 'NumExercisesRef'].value();

      console.log(valueReps)
      console.log(valueExercises)
    });
  }

  renderFormSection = (sectionHeader, defaultReps, defaultExercies) => {
    let { errors } = this.state
    const minRepsErrorKey = sectionHeader + 'MinReps'
    const numExercisesErrorKey = sectionHeader + 'NumExercises'
    
    return (
       <View>         
         <Text>{sectionHeader}</Text>  
         <TextField 
           ref={this[sectionHeader + 'MinRepsRef']}
           label="Min Reps"
           textColor={offBlack}
           activeLineWidth={1}
           tintColor={accent}
           baseColor={lightOffBlack}
           errorColor={error}
           error={errors[minRepsErrorKey]}
           defaultValue={defaultReps.toString()}
           onChangeText={(text) => this.onChange(text, minRepsErrorKey, 'reps')}
         />
 
         <TextField 
           ref={this[sectionHeader + 'NumExercisesRef']}
           label="# of Exercises"
           textColor={offBlack}
           activeLineWidth={1}
           tintColor={accent}
           baseColor={lightOffBlack}
           errorColor={error}
           error={errors[numExercisesErrorKey]}
           defaultValue={defaultExercies.toString()}
           onChangeText={(text) => this.onChange(text, numExercisesErrorKey, 'exercises')}
         />
       </View>
     )
  }

  render() {
    let { isErrored } = this.state
    return (
      <>
        {this.renderFormSection('Pull', 50, 1)}
        {this.renderFormSection('Push', 50, 1)}
        {this.renderFormSection('Legs', 30, 1)}
        {this.renderFormSection('Core', 30, 1)}
        <Button 
          raised 
          primary 
          text="Generate A Workout" 
          onPress={this.handleSubmit} 
          disabled={isErrored}/>
      </>
    );
  }
}