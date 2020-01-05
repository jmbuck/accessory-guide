import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
  
import { formStyles } from './styles'
import { offBlack, accent, lightOffBlack, error } from '../colors'

export default class GenerateForm extends Component {

  constructor(props) {
    super(props) 

    this.state = {}
  }

  renderFormSection = (sectionHeader, defaultValue) => {
   /* return (
        <>
            <Text>{sectionHeader}</Text>
            <Content>
                <Item floatingLabel>
                    <Label>Min Reps</Label>
                    <Input defaultValue={defaultValue.toString()} value={defaultValue.toString()}/>
                </Item>
                <Item floatingLabel>
                    <Label># Exercises</Label>
                    <Input />
                </Item>
            </Content>
        </>
    )*/
  }

  onChangeReps = (text, errorKey) => {
    // Check if text is a number
    let reg = /^\d+$/;
    if(reg.test(text)) {
      // Text is a number
      const num = parseInt(text, 10)
      if(num >= 10 && num <= 200) {
        // Number is in a valid range
        this.setState({ errors: { [errorKey]: null }})
      } else if(num < 10) {
        this.setState({ errors: { [errorKey]: 'Minimum reps should be 10 or above'}})
      } else {
        this.setState({ errors: { [errorKey]: 'Minimum reps should be 200 or below'}})
      }
    } else {
      //Text is not a number
      if(text.length > 0) {
        this.setState({ errors: { [errorKey]: 'Minimum reps must be a number'}})
      } else {
        this.setState({ errors: { [errorKey]: 'Field cannot be empty'}})
      }
        
    }
    
  }

  render() {

    let { errors = {} } = this.state
    const errorKey = 'pullMinReps' //TODO: Generalize
      /*
    {this.renderFormSection('Pull', 50)}
    {this.renderFormSection('Push', 50)}
    {this.renderFormSection('Legs', 30)}
    {this.renderFormSection('Core', 30)}*/

    return (
        <TextField 
            label="Min Reps"
            textColor={offBlack}
            activeLineWidth={1}
            tintColor={accent}
            baseColor={lightOffBlack}
            errorColor={error}
            error={errors[errorKey]}
            defaultValue={50}
            onChangeText={(text) => this.onChangeReps(text, errorKey)}
        />
    );
  }
}