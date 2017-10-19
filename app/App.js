import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Drawer, { LoginStack } from "./NavigationContainer";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return <LoginStack />;
  }
}

const styles = StyleSheet.create({});
