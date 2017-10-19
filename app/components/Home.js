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
  Right,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container style={{backgroundColor:'#26292E' }}>
        <Header style={{backgroundColor: 'darkorange'}}>
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
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../assets/login_background.jpg")} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/login_background.jpg")} style={{height: 200, width: 300, flex: 1}}/>
                <Text>
                dolor sit amet, consectetur adipiscing elit. Nunc sed iaculis diam. Sed in rutrum leo. Nulla pharetra suscipit est, quis placerat quam egestas vitae.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                <Icon name="thumbs-up" />
                <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../assets/login_background.jpg")} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require("../../assets/login_background.jpg")} style={{height: 200, width: 300, flex: 1}}/>
                <Text>
                et malesuada justo. Nunc suscipit purus ac turpis bibendum,
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="thumbs-up" />
                  <Text>1,926 likes</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
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
