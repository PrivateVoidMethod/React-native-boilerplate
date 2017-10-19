import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import SideBar from "./components/sidebar/SideBar";
import LoginScreen from "./components/Login";
import SignupScreen from "./components/Signup";
import Home from "./components/Home";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export const LoginStack = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: false
    }
  },
  Signup: { screen: SignupScreen,
    navigationOptions: {
      header: false
    } 
  },
  App: {
    screen: Drawer,
    navigationOptions: {
      header: false
    }
  }
});

export default Drawer;
