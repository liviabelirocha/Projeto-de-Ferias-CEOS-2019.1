import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../theme';

export const categoryData = {
  casa: {
    cor: colors.yellow,
    icon: 'home'
  },
  lazer: {
    cor: colors.purple,
    icon: 'tv'
  },
  compras: {
    cor: colors.orange,
    icon: 'shopping-bag'
  },
  outro: {
    cor: colors.blue,
    icon: 'globe'
  },
};

export class CategoryBtn extends React.Component {

  state = {
    selected: true,
    color: new Animated.Value(0)
  }

  animate = () => {
    let finalValue = this.state.selected ? 1 : 0;
    Animated.timing(this.state.color, {
      toValue: finalValue,
      duration: 150,
      easing: Easing.linear
    }).start();
    this.setState({selected: !this.state.selected})
  }

  render() {
    const btnColor = this.state.color.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.color, '#9b9da9']
    })

    return (
      <TouchableWithoutFeedback
        style
        onPress={() => {this.animate(); this.props.onPress()}}>
          <Animated.View style={{...styles.btn, backgroundColor: btnColor}}>
          <Icon 
            name={this.props.icon}
            size={24}
            color={'#fff'}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
