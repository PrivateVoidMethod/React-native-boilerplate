import React from "react";
import { Image, Linking, AsyncStorage, FlatList, TouchableOpacity, View } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Thumbnail
} from "native-base";
import { NavigationActions } from 'react-navigation'

const resetDrawer = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
})


const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "md-home",
  },
  {
    name: "Profile",
    route: "Home",
    icon: "person",
  },
  {
    name: "Settings",
    route: "Home",
    icon: "settings",
  },
  {
    name: "Feedback",
    route: "Home",
    icon: "paper",
  },
  {
    name: "Log out",
    route: "Login",
    icon: "log-out",
    onPress(_this, data) {
      _this.props.navigation.dispatch(resetDrawer)
    }
  },
];
class SideBar extends React.Component {
  navigate(data) {
    if (data.hasOwnProperty("onPress")) {
      data.onPress(this, data);
    } else {
      this.props.navigation.navigate(data.route);
    }
  }

  render() {
    return (
      <Container style={{backgroundColor: '#26292E'}}>
        <Content
          bounces={false}
          style={{ flex: 1, top: -1 }}
        >
        <View style={{alignItems: 'center', marginTop: 20}}>
        <Thumbnail large source={require("../../../assets/login_background.jpg")} />
        <Text style={{color: 'white', marginTop: 5}}>Kasper Johnsen</Text>
   </View>
          <FlatList
            data={datas}
            renderItem={({ item }) => (
              <ListItem  onPress={() => this.navigate(item)} style={{backgroundColor: '#26292E', borderBottomWidth: 1, marginRight: 10, borderBottomColor: 'grey'}}>
              <TouchableOpacity  onPress={() => this.navigate(item)}>
                <Left>
                  <Icon
                    active
                    name={item.icon}
                    style={{ color: "darkorange", fontSize: 26, width: 30 }}
                  />
                  <Text style={{color: 'white'}}>{item.name}</Text>
                </Left>
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
