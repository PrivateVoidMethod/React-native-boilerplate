import React, { Component } from "react";
import { Root } from "native-base";
import { Platform, StyleSheet, Text, View } from "react-native";
import Drawer, { LoginStack } from "./NavigationContainer";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Root> 
      <LoginStack /> 
      </Root>
    )
  }
}

const styles = StyleSheet.create({});
