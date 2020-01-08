import React, { Component } from 'react'
import { View } from 'react-native'

import { dividerStyles } from './styles'

export default class Divider extends Component {
  render() {
    return (
      <View style={this.props.thick? dividerStyles.thickDivider : dividerStyles.divider} />
    );
  }
}