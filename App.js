/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import AppNavigator from './src/routes/AppNavigator';


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
