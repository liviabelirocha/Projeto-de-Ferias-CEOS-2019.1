import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { colors } from '../theme';
import { UserRoutes } from '../router';
import Icon from 'react-native-vector-icons/Feather';

class Toolbar extends React.Component {

  getNavigationTabs() {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    let navigationTabs = [];

    routes.map((route, i) => {
      const routeDetails = UserRoutes[route.routeName];
      const selected = i == index;
      navigationTabs.push(
      <View style={styles.tab} key={route.key}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            if(selected) { return }
            navigation.navigate(route.routeName);
          }}>
          <Icon name={routeDetails.icon} size={24} color={selected ? 'white' : colors.accent}/>
        </TouchableOpacity>
        {selected ? <Text style={styles.selectedText}>{routeDetails.title.toUpperCase()}</Text> : null}
      </View>
      )
    });

    return navigationTabs;
  }

  render() {
    return (
      <View style={styles.toolbar}>
        {this.getNavigationTabs()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
  },

  tab: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  button : {
    padding: 24
  },

  selectedText: {
    color: '#fff',
    fontSize: 16,
    paddingRight: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    letterSpacing: 2
  }
});

export default Toolbar;
