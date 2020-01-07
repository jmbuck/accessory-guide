import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { offBlack } from '../colors'

export default class TopHeader extends Component {
  navigateToScreen = (label) => {
    if(label.index === 0) {
      // Exercises
      this.props.navigation.navigate('Exercises')
    }
  }
  render() {
    return (
      <>
      <StatusBar backgroundColor={offBlack} />
      <Toolbar
        leftElement={this.props.home ? null : 'arrow-back'}
        centerElement="Accessory Guide"
        rightElement={{
            menu: {
                icon: "menu",
                labels: ["Exercises", "Settings"]
            }
        }}
        onRightElementPress={this.navigateToScreen}
        onLeftElementPress={() => this.props.navigation.goBack()}
      />
      </>
    );
  }
}