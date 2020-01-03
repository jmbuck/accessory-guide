import React, { Component } from 'react';
import { Form, Text, Content, Item, Label, Input, Button } from 'native-base';
import { formStyles } from './styles'

export default class GenerateForm extends Component {

  renderFormSection = (sectionHeader, defaultValue) => {
    return (
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
    )
  }

  render() {
    return (
        <Form>
            {this.renderFormSection('Pull', 50)}
            {this.renderFormSection('Push', 50)}
            {this.renderFormSection('Legs', 30)}
            {this.renderFormSection('Core', 30)}
            <Button style={formStyles.submitButton} rounded>
                <Text style={formStyles.text}>Generate A Workout</Text>
            </Button>
        </Form>
    );
  }
}