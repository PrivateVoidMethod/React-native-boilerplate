import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Input,
  Item,
  H1
} from "native-base";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default class Signup extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Image
            style={styles.backgroundImage}
            source={require("../../assets/login_background.jpg")}
          >
            <View style={styles.overlay}>
              <View style={styles.container}>
            <H1 style={{alignSelf: 'center', marginBottom: 100}}>Create Account</H1>
            <Item rounded style={styles.inputfields}>
                <Icon name="person" style={styles.inputIcon} />
                <Input placeholder="Username" />
              </Item>
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
                  Sign up
                </Text>
              </Button>
           

      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
              <Text onPress={() => {alert('Terms & Conditions')}} style={{ color: 'white', marginLeft: 20}}>Terms and Conditions</Text>
              <Text onPress={() => {this.props.navigation.goBack()}} style={{ color: 'white', marginRight: 20}}>Sign in</Text>
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
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10
  },
  inputfields: {
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  inputIcon: {
    color: "rgba(0, 0, 0, .7)"
  },
  overlay: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  companyLogo: {
    width: windowWidth / 1.1,
    height: windowHeight / 4,
    alignSelf: "center",
    resizeMode: "contain",
    opacity: 0.9
  }
});
