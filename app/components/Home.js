import React, { Component } from "react";
import { StyleSheet, View, Image} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right
} from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'orange'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
          <Text>Stone Mountain</Text>
         </Body>
          <Right />
        </Header>

        <Content>
          <Text>Home</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    logoHeader: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});
