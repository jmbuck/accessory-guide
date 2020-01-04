import React, { Component } from "react";
import { ThemeContext, getTheme } from 'react-native-material-ui';

import App from "../App";
import { offWhite, primary, accent, light, offBlack, lightOffBlack, lightGray } from '../colors'

const uiTheme = {
  palette: {
    // main theme colors
    primaryColor: primary,
    accentColor: accent,
    // text color palette
    primaryTextColor: offBlack,
    secondaryTextColor: lightOffBlack,
    alternateTextColor: offWhite,
    // backgournds and borders
    canvasColor: offWhite,
    borderColor: lightGray,
    // https://material.google.com/style/color.html#color-text-background-colors
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class Setup extends Component {
  render() {
    // Add StyleProvider below for custom theme
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <App />
      </ThemeContext.Provider>
    );
  }
}