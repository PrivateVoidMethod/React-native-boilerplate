import React from "react";
import { Image, Linking, AsyncStorage, FlatList } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";

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
];
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  navigate(data) {
    if (data.hasOwnProperty("onPress")) {
      data.onPress(this, data);
    } else {
      this.props.navigation.navigate(data.route);
    }
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, top: -1 }}
        >
          <FlatList
            data={datas}
            renderItem={({ item }) => (
              <ListItem button noBorder onPress={() => this.navigate(item)}>
                <Left>
                  <Icon
                    active
                    name={item.icon}
                    style={{ color: "darkorange", fontSize: 26, width: 30 }}
                  />
                  <Text>{item.name}</Text>
                </Left>
              </ListItem>
            )}
          />
        </Content>
        <Text>Log out</Text>
      </Container>
    );
  }
}

export default SideBar;
