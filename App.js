import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Setup from './src/boot/Setup'
import store from './src/redux'

export default class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <Setup />
      </Provider>);
  }
}
