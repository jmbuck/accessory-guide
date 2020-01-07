import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-material-ui'
  
import { formStyles } from './styles'
import Divider from './Divider'
import { offBlack, accent, lightOffBlack, error } from '../colors'

export default class GenerateForm extends Component {

  constructor(props) {
    super(props) 

    this.state = { errors: {}, values: {}, isErrored: false }

  }

  isErrored = () => {
    const { errors } = this.state
    for(let error of Object.values(errors)) {
      if(error) return true
    }
    return false
  }

  onChange = (text, key, type) => {
    // Check if text is a number
    const { errors, values } = this.state
    let reg = /^\d+$/;

    if(reg.test(text)) {
      // Text is a number
      const num = parseInt(text, 10)
      if(type === 'reps') {
        // Min Reps
        if(num >= 10 && num <= 200) {
          // Number is in a valid range
          errors[key] = null
        } else if(num < 10) {
          errors[key] = 'Must be at least 10'
        } else {
          errors[key] = 'Must be 200 or fewer'
        }
      } else {
        // # of Exercises
        if(num >= 1 && num <= 5) {
          // Number is in a valid range
          errors[key] = null 
        } else if(num < 1) {
          errors[key] = 'Must be at least 1'
        } else {
          errors[key] = 'Must be 5 or fewer'
        }
      }
    } else {
      //Text is not a number
      if(text.length > 0) {
        errors[key] = 'Must be a number'
      } else {
        errors[key] = 'Field cannot be empty'
      }   
    }

    values[key] = text
    this.setState({ errors, values, isErrored: this.isErrored() })
  }
  
  handleSubmit = (ev) => {
    // TODO: Generate a workout, update database
  }

  renderFormSection = (sectionHeader, defaultReps, defaultExercises, isLast) => {
    let { errors, values } = this.state
    const minRepsKey = sectionHeader + 'MinReps'
    const numExercisesKey = sectionHeader + 'NumExercises'

    if(!values[minRepsKey]) values[minRepsKey] = defaultReps.toString()
    if(!values[numExercisesKey]) values[numExercisesKey] = defaultExercises.toString()
    
    return (
      <>     
        <View style={formStyles.formSection}>    
          <Text style={formStyles.sectionHeader}>{sectionHeader} Exercises</Text>       
          <View style={formStyles.textField}>
            <TextField 
              label="Min Reps"
              textColor={offBlack}
              activeLineWidth={1}
              tintColor={accent}
              baseColor={lightOffBlack}
              errorColor={error}
              error={errors[minRepsKey]}
              defaultValue={defaultReps.toString()}
              value={values[minRepsKey]}
              onChangeText={(text) => this.onChange(text, minRepsKey, 'reps')}
            />
          </View>

          <View style={formStyles.textField}>
          <TextField 
            label="Exercises"
            textColor={offBlack}
            activeLineWidth={1}
            tintColor={accent}
            baseColor={lightOffBlack}
            errorColor={error}
            error={errors[numExercisesKey]}
            defaultValue={defaultExercises.toString()}
            value={values[numExercisesKey]}
            onChangeText={(text) => this.onChange(text, numExercisesKey, 'exercises')}
          />
          </View>
        </View>
        {!isLast && <Divider />}
      </>
     )
  }

  render() {
    let { isErrored } = this.state
    return (
      <>
        {this.renderFormSection('Pull', 50, 1)}
        {this.renderFormSection('Push', 50, 1)}
        {this.renderFormSection('Legs', 30, 1)}
        {this.renderFormSection('Core', 30, 1, true)}
        <Button 
          raised 
          accent 
          text="Generate A Workout" 
          onPress={this.handleSubmit} 
          disabled={isErrored}
        />
      </>
    );
  }
}