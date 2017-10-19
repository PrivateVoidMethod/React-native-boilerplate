import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  StatusBar,
  AsyncStorage
} from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Input,
  Item,
  Toast
} from "native-base";
import Config from "../../config.json";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class Login extends React.Component {
  state = {
    isLoading: false,
    email: "",
    password: ""
  };

  login() {
    let data = {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return fetch(Config.API_URL + "/api/v1/authenticate/login", data)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            console.log(response);
            throw err;
          });
        }
        return response.json();
      })
      .then(responseJson => {
        AsyncStorage.setItem("token", responseJson.token);
        this.props.navigation.navigate("Home");
      })
      .catch(error => {
        console.log(error)
        let message = "";
        if (error.error) {
          message = error.error;
        } else {
          Object.keys(error.errors).forEach(item => {
            error.errors[item].forEach(msg => (message += msg + "\n"));
          });
        }
   
        Toast.show({
          text: message,
          type: "danger",
          position: "top",
          duration: 2000
        });
      });
  }

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
                <Input
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                  keyboardType={"email-address"}
                  returnKeyType={"next"}
                  onSubmitEditing={() => this.refs.password._root.focus()}
                />
              </Item>
              <Item rounded style={styles.inputfields}>
                <Icon name="lock" style={styles.inputIcon} />
                <Input
                  ref="password"
                  placeholder="Password"
                  returnKeyType={"done"}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Button
                style={{ marginTop: 10 }}
                rounded
                warning
                block
                onPress={() => {
                  this.login();
                }}
              >
                <Text uppercase={false} style={{ color: "black" }}>
                  Login
                </Text>
              </Button>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text
                  onPress={() => {
                    navigate("Signup");
                  }}
                  style={{ color: "white", marginTop: 15, marginLeft: 10 }}
                >
                  Create Account
                </Text>
                <Text
                  onPress={() => {
                    alert("Forgot Password");
                  }}
                  style={{ color: "white", marginTop: 15, marginRight: 10 }}
                >
                  Forgot Password
                </Text>
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
