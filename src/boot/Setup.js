import React, { Component } from 'react'
import Realm from 'realm'
import { connect } from 'react-redux'
import { ThemeContext, getTheme } from 'react-native-material-ui'

import App from '../App'
import { offWhite, primary, accent, offBlack, lightOffBlack, lightGray } from '../colors'
import { WorkoutSchema, SetSchema, ExerciseSchema, schemaVersion, migration } from '../schema'
import { setDatabase, closeDatabase } from '../redux/actions'

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

class Setup extends Component {

  componentDidMount() {
    Realm.open({
      schema: [WorkoutSchema, SetSchema, ExerciseSchema],
      schemaVersion: schemaVersion,
      migration: migration,
    }).then(realm => {
      this.props.setDatabase(realm)
    });
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    if (this.props.realm !== null && !this.props.realm.isClosed) {
      this.props.closeDatabase(realm)
    }
  }

  render() {
    // Add StyleProvider below for custom theme
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <App />
      </ThemeContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    realm: state.database ? state.database.realm : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDatabase: (realm) => dispatch(setDatabase(realm)),
    closeDatabase: (realm) => dispatch(closeDatabase(realm)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup)