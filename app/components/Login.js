import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  StatusBar
} from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Input,
  Item
} from "native-base";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <StatusBar hidden={true} />
        <Content>
          <Image
            style={styles.backgroundImage}
            source={require("../../assets/login_background.jpg")}
          >
            <Image
              style={styles.companyLogo}
              source={require("../../assets/stone-mountain-logo.png")}
            />
            <View style={styles.container}>
              <Item rounded style={styles.inputfields}>
                <Icon name="mail" style={styles.inputIcon} />
                <Input placeholder="Email" />
              </Item>
              <Item rounded style={styles.inputfields}>
                <Icon name="lock" style={styles.inputIcon} />
                <Input placeholder="Password" />
              </Item>
              <Button
              style={{marginTop: 10}}
                rounded
                warning
                block
                onPress={() => {
                  navigate("Home");
                }}
              >
                <Text uppercase={false} style={{ color: "black" }}>
                  Login
                </Text>
              </Button>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text onPress={() => {navigate('Signup')}} style={{ color: 'white', marginTop: 15, marginLeft: 10}}>Create Account</Text>
              <Text onPress={() => {alert('Forgot Password')}} style={{ color: 'white', marginTop: 15, marginRight: 10}}>Forgot Password</Text>
              </View>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    opacity: 0.9
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10
  },
  inputfields: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, .9)"
  },
  inputIcon: {
    color: "rgba(0, 0, 0, .7)"
  },
  companyLogo: {
    width: windowWidth / 1.1,
    height: windowHeight / 4,
    alignSelf: "center",
    resizeMode: "contain",
    opacity: 0.9
  }
});
