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
    this.props.navigation.navigate("Home");
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
                style={styles.textContainer}
              >
                <Text
                  onPress={() => {
                    navigate("Signup");
                  }}
                  style={styles.text}
                >
                  Create Account
                </Text>
                <Text
                  onPress={() => {
                    alert("Forgot Password");
                  }}
                  style={styles.text}
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
    width: windowWidth, //fill entire window
    height: windowHeight, //fill entire window
    opacity: 0.9 // make it abit see through
  },
  container: { // Container for most of the content
    flex: 1, // makes the container flexable
    flexDirection: "column", // all child elements should be under eachother
    justifyContent: "center", // all child elements should be centered
    margin: 10 // abit of margin to get child elements away from the edge of the screen
  },
  inputfields: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, .9)" // color of the input with 0.9 as opacity
  },
  inputIcon: {
    color: "rgba(0, 0, 0, .7)" // color of the input icon with 0.9 as opacity
  },
  companyLogo: {
    width: windowWidth / 1.1, // width determined by the window width
    height: windowHeight / 4, // height determined by the window height
    alignSelf: "center",
    resizeMode: "contain",
    opacity: 0.9
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "white",
    marginTop: 15, 
    marginRight: 10
  }
});
