import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Toolbar } from 'react-native-material-ui';
import { offBlack } from '../colors'

export default class TopHeader extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor={offBlack} />
      <Toolbar
        centerElement="Accessory Guide"
        rightElement={{
            menu: {
                icon: "menu",
                labels: ["Exercises", "Settings"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      </>
    );
  }
}