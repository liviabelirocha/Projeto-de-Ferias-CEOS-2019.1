import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Feather';

class ExpenseCard extends React.Component {

  state = {
    expanded: false,
    cardHeight: new Animated.Value(56)
  }

  setMaxHeight = (event) => {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  toggleCard = () => {
    let expanded = this.state.expanded;
    this.setState({
      expanded: !expanded
    });
    Animated.spring(
      this.state.cardHeight, 
      {toValue: expanded ? 56 : this.state.maxHeight + 56}
    ).start();
  }

  render() {
    let expanded = this.state.expanded;
    return (
      <Animated.View style={{...styles.card, height: this.state.cardHeight}}>
        <TouchableOpacity 
          style={styles.tile}
          onPress={this.toggleCard}>
          <View style={{
            backgroundColor: colors[this.props.color],
            ...styles.indicator
          }}/>
          <Text style={styles.text}>{this.props.title.toUpperCase()}</Text>
          <Text style={{...styles.text, marginLeft: 'auto'}}>R$ {this.props.value}</Text>
            <Icon
              style={{marginLeft: 12}}
              name={'chevron-' + (expanded ? 'up':'down')}
              size={24} 
              color='#fff'
            />
        </TouchableOpacity>
        <View style={{
          height: 1,
          backgroundColor: colors[this.props.color]
        }}/>
        <View style={{padding: 12}} onLayout={this.setMaxHeight}>
          <Text style={styles.text}>{this.props.content}</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

  card: {
    width: Dimensions.get('window').width - 32,
    marginBottom: 8,
    backgroundColor: colors.primaryLight,
    overflow: 'hidden'
  },

  tile: {
    backgroundColor: colors.primaryLight,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12
  },

  indicator: {
    height: 32,
    width: 6,
    marginRight: 12
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    letterSpacing: 1,
  },

  divider: {
    height: 1,
    backgroundColor: colors.accent
  }
});

export default ExpenseCard;
